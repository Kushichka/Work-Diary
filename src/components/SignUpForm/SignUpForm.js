import { useState, useEffect, Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createNewUser } from '../../firebase/firebaseSignUp';
import { formInputHandler } from '../../utils/formInputHandler';
import style from './SignUpForm.module.scss';

export const SignUpForm = () => {

    const [formValid, setFormValid] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '', // min - 3, max - 24
        lastName: '', // min - 3, max - 24
        email: '',
        pass: '', // min - 6, max - 30
        rePass: '' // min - 6, max - 30
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(formValid) {
            const accExist = await createNewUser(formData);
            if(!accExist) {
                navigate('/signin');
            } else {
                setFormValid(false);
                console.log(accExist);
            }
        }

        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            pass: '',
            rePass: ''
        });
    }

    return (
        <div className={style.signUpForm}>
            <form>
                <div className={style.titleWrapper}>
                    <p className={style.title}>Create Account</p>
                </div>
                <SignUpInputs 
                    formData={formData} 
                    setFormData={setFormData}
                    setFormValid={setFormValid}
                />
                <div className={style.btns}>
                    <button 
                        className={style.btnSignUp} 
                        onClick={(e) => handleSubmit(e)}
                        type='submit'
                        disabled={!formValid}
                    >
                        Sign Up
                    </button>
                    <Link className={style.btnSignIn} to='/signin'>
                        <p>Sign In</p>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export const SignUpInputs = ({formData, setFormData, setFormValid}) => {

    const [dirtyData, setDirtyData] = useState({
        firstName: false,
        lastName: false,
        email: false,
        pass: false,
        rePass: false
    });

    const [errors, setErrors] = useState({
        firstName: 'Field cannot be empty!',
        lastName: 'Field cannot be empty!',
        email: 'Field cannot be empty!',
        pass: 'Field cannot be empty!',
        rePass: 'Field cannot be empty!'
    })

    const inputHandler = (e) => {
        let error = '';

        setFormData({ ...formData, [e.target.name]: e.target.value });

        if(e.target.name !== 'rePass') {
            error = formInputHandler(e);
        } else error = formInputHandler(e, formData.pass);
        
        setErrors({...errors, [e.target.name]: error});
    }

    const blurHandler = (e) => {
        setDirtyData({...dirtyData, [e.target.name]: true});
    }

    useEffect(() => {
        errors.firstName || errors.lastName || errors.email || errors.pass || errors.rePass ?
            setFormValid(false) : setFormValid(true);
    }, [errors]);

    useEffect(() => {
        if ((formData.pass !== formData.rePass) && dirtyData.rePass) {
            setErrors({...errors, rePass: 'Passwords do not match'});
        } else if ((formData.pass === formData.rePass) && dirtyData.rePass) {
            setErrors({...errors, rePass: ''});
        }
    }, [formData.pass]);

    const inputStaticValues = [
        {title: 'First Name:', codeTitle: 'firstName', type: 'text'},
        {title: 'Last Name:', codeTitle: 'lastName', type: 'text'},
        {title: 'Email:', codeTitle: 'email', type: 'email'},
        {title: 'Password:', codeTitle: 'pass', type: 'password'},
        {title: 'Repeat password:', codeTitle: 'rePass', type: 'password'}
    ];

    const inputs = inputStaticValues.map(item => (
        <Fragment key={item.codeTitle}>
            <label htmlFor={item.codeTitle}>{item.title}</label>
            <div className={style.inputWrapper}>
                {(dirtyData[item.codeTitle] && errors[item.codeTitle]) && <div className={style.error}>{errors[item.codeTitle]}</div>}
                <input
                    className={style.input}
                    value= {formData[item.codeTitle]}
                    onBlur={e => blurHandler(e)}
                    onChange={e => inputHandler(e)}
                    type={item.type}
                    id={item.codeTitle}
                    name={item.codeTitle}
                />
            </div>
        </Fragment>
    ));

    return (
        <div className={style.wrapper}>
            <div className={style.formWrapper}>
                {inputs}
            </div>
        </div>
    )
}