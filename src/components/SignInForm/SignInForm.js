import { useState, useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './SignInForm.module.scss'
import { onLogin } from '../../redux/actions';
import { getUser } from '../../firebase/firebaseSignIn';
import { formInputHandler } from '../../utils/formInputHandler';

const SignInForm = () => {

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({ email: '', pass: '' });
    const [dirtyData, setDirtyData] = useState({email: false, pass: false});
    const [formValid, setFormValid] = useState(false);
    const [errors, setErrors] = useState({
        email: 'Field cannot be empty!',
        pass: 'Field cannot be empty!'
    })
    const inputStaticValues = [
        {title: 'Email:', codeTitle: 'email', type: 'email'},
        {title: 'Password:', codeTitle: 'pass', type: 'password'}
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        const [accExist, data] = await getUser(formData);
        accExist ? dispatch(onLogin()) : console.log('wrong data');
        setFormData({ email: '', pass: '' });        
    }

    const blurHandler = (e) => {
        setDirtyData({...dirtyData, [e.target.name]: true});
    }

    const inputHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({...errors, [e.target.name]: formInputHandler(e)});
    }

    const inputs = inputStaticValues.map(item => (
        <Fragment key={item.codeTitle}>
            <label htmlFor={item.codeTitle}>{item.title}</label>
            <div className={style.inputWrapper}>
                {(dirtyData[item.codeTitle] && errors[item.codeTitle]) && <div className={style.error}>{errors[item.codeTitle]}</div>}
                <input
                    className={style.input}
                    type={item.type}
                    id={item.codeTitle}
                    name={item.codeTitle}
                    value={formData[item.codeTitle]}
                    onBlur={e => blurHandler(e)}
                    onChange={e => inputHandler(e)}
                />
            </div>
        </Fragment>
    ));

    useEffect(() => {
        errors.email || errors.pass ?
            setFormValid(false) : setFormValid(true);
    }, [errors]);

    return (
        <div className={style.signInForm}>
            <form>
                <div className={style.titleWrapper}>
                    <p className={style.title}>Log In</p>
                </div>
                <div className={style.wrapper}>
                    <div className={style.formWrapper}>
                        {inputs}
                    </div>
                </div>
                <div className={style.btns}>
                    <button 
                        className={style.btnSignIn} 
                        onClick={(e) => handleSubmit(e)}
                        disabled={!formValid}
                    >
                        Sign In
                    </button>
                    <Link className={style.btnSignUp} to='/signup'>
                        <p>Sign Up</p>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;