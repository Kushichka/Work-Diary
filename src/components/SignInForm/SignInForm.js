import { useState, useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './SignInForm.module.scss'
import { onLogin, changeUserData, changeFirstName, changeLastName,changeEmail, changeRole } from '../../redux/actions';
import { getUser } from '../../firebase/firebaseSignIn';
// import { addWorkData } from '../../firebase/addWorkData';
import { formInputHandler } from '../../utils/formInputHandler';
import { getTimes } from '../../firebase/getTimes';

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
        // addWorkData();
        const {accExist, userData, userID} = await getUser(formData);
        accExist ? userLogin(userData, userID) : console.log('wrong data');
        setFormData({ email: '', pass: '' });     
    }

    const userLogin = async (data, id) => {
        dispatch(onLogin());
        dispatch(changeFirstName(data.firstName));
        dispatch(changeLastName(data.lastName));
        dispatch(changeEmail(data.email));
        dispatch(changeRole(data.role));
        console.log(`My ID: ${id}`);

        const user = await getTimes(id);
        const userdata = Object.keys(user).map(userId => (
            {
                    date: user[userId].date,
                    dayOff: user[userId].dayOff,
                    shift: user[userId].shift,
                    breaks: user[userId].breaks,
                    hours: user[userId].hours,
                    overtime: user[userId].overtime
            }
        ));
        dispatch(changeUserData(userdata));
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