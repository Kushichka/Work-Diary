import { useState, useEffect } from 'react';
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

    const inputHandle = (e) => {
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
        if (formData.pass !== formData.rePass) {
            setErrors({...errors, rePass: 'Passwords do not match'});
        } else setErrors({...errors, rePass: ''});
    }, [formData.pass]);

    

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
                        onChange={e => inputHandle(e)}
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
                        onChange={e => inputHandle(e)}
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
                        onChange={e => inputHandle(e)}
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
                        onChange={e => inputHandle(e)}
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
                        onChange={e => inputHandle(e)}
                        type="password"
                        id='rePass'
                        name='rePass'
                    />
                </div>
            </div>
        </div>
    )
}