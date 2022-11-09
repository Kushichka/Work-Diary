import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createNewUser } from '../../firebase/firebaseSignUp';
import style from './SignUpForm.module.scss';

export const SignUpForm = () => {

    const [formValid, setFormValid] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '', // min - 3, max - 24
        lastName: '', // min - 3, max - 24
        email: '',
        pass: '', // min - 6, max - 30
        rePass: '' // min - 6, max - 30
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if(formValid) {
            createNewUser(formData);
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

    const handleFirstName = (value) => {
        setFormData({ ...formData, firstName: value });
        if(value.length < 3 || value.length > 24) {
            setErrors({...errors, firstName: 'Wrong length! (3 - 24)'});
            if(!value) setErrors({...errors, firstName: 'Field cannot be empty!'});
        } else setErrors({...errors, firstName: ''});
    }
    const handleLastName = (value) => {
        setFormData({ ...formData, lastName: value });
        if(value.length < 3 || value.length > 24) {
            setErrors({...errors, lastName: 'Wrong length! (3 - 24)'});
            if(!value) setErrors({...errors, lastName: 'Field cannot be empty!'});
        } else setErrors({...errors, lastName: ''});
    }
        
    const handleEmail = (value) => {
        setFormData({ ...formData, email: value });
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(value).toLowerCase())) {
            setErrors({...errors, email: 'Wrong email format!'});
            if(!value) setErrors({...errors, email: 'Field cannot be empty!'});
        } else setErrors({...errors, email: ''});
    }
    const handlePass = (value) => {
        setFormData({ ...formData, pass: value });
        if(value.length < 6 || value.length > 30) {
            setErrors({...errors, pass: 'Wrong length! (3 - 24)'});
            if(!value) setErrors({...errors, pass: 'Field cannot be empty!'});
        } else setErrors({...errors, pass: ''});
    }
    const handleRePass = (value) => {
        setFormData({ ...formData, rePass: value });
        if(value !== formData.pass) {
            setErrors({...errors, rePass: 'Passwords do not match'});
            if(!value) setErrors({...errors, rePass: 'Field cannot be empty!'});
        } else setErrors({...errors, rePass: ''});
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'firstName':
                setDirtyData({...dirtyData, firstName: true});
                break;
            case 'lastName':
                setDirtyData({...dirtyData, lastName: true});
                break;
            case 'email':
                setDirtyData({...dirtyData, email: true});
                break;
            case 'pass':
                setDirtyData({...dirtyData, pass: true});
                break;
            case 'rePass':
                setDirtyData({...dirtyData, rePass: true});
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        errors.firstName || errors.lastName || errors.email || errors.pass || errors.rePass ?
            setFormValid(false) : setFormValid(true);
    }, [errors]);

    return (
        <div className={style.wrapper}>
            <div className={style.formWrapper}>
                <label htmlFor='firstName'>First Name:</label>
                <div className={style.inputWrapper}>
                    {(dirtyData.firstName && errors.firstName) && <div className={style.error}>{errors.firstName}</div>}
                    <input
                        className={style.input}
                        value={formData.firstName}
                        onBlur={e => blurHandler(e)}
                        onChange={e => handleFirstName(e.target.value)}
                        type="text"
                        id='firstName'
                        name='firstName'
                    />
                </div>
                <label htmlFor='lastName'>Last Name:</label>
                <div className={style.inputWrapper}>
                    {(dirtyData.lastName && errors.lastName) && <div className={style.error}>{errors.lastName}</div>}
                    <input
                        className={style.input}
                        value={formData.lastName}
                        onBlur={e => blurHandler(e)}
                        onChange={e => handleLastName(e.target.value)}
                        type="text"
                        id='lastName'
                        name='lastName'
                    />
                </div>
                <label htmlFor='email'>Email:</label>
                <div className={style.inputWrapper}>
                    {(dirtyData.email && errors.email) && <div className={style.error}>{errors.email}</div>}
                    <input
                        className={style.input}
                        value={formData.email}
                        onBlur={e => blurHandler(e)}
                        onChange={e => handleEmail(e.target.value)}
                        type="email"
                        id='email'
                        name='email'
                    />
                </div>
                <label htmlFor='pass'>Password:</label>
                <div className={style.inputWrapper}>
                    {(dirtyData.pass && errors.pass) && <div className={style.error}>{errors.pass}</div>}
                    <input
                        className={style.input}
                        value={formData.pass}
                        onBlur={e => blurHandler(e)}
                        onChange={e => handlePass(e.target.value)}
                        type="password"
                        id='pass'
                        name='pass'
                    />
                </div>
                <label htmlFor='rePass'>Repeat password:</label>
                <div className={style.inputWrapper}>
                    {(dirtyData.rePass && errors.rePass) && <div className={style.error}>{errors.rePass}</div>}
                    <input
                        className={style.input}
                        value={formData.rePass}
                        onBlur={e => blurHandler(e)}
                        onChange={e => handleRePass(e.target.value)}
                        type="password"
                        id='rePass'
                        name='rePass'
                    />
                </div>
            </div>
        </div>
    )
}