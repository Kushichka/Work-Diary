import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './SignInForm.module.scss'
import { onLogin } from '../../redux/actions';
import { getUser } from '../../firebase/firebaseSignIn';

const SignInForm = () => {

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({ email: '', pass: '' });
    const [dirtyData, setDirtyData] = useState({email: false, pass: false});
    const [formValid, setFormValid] = useState(false);
    const [errors, setErrors] = useState({
        email: 'Field cannot be empty!',
        pass: 'Field cannot be empty!'
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const [accExist, data] = await getUser(formData);
        accExist ? dispatch(onLogin()) : console.log('wrong data');
        setFormData({ email: '', pass: '' });        
    }

    const blurHandler = (e) => {
        setDirtyData({...dirtyData, [e.target.name]: true});
    }

    const emailHandler = (value) => {
        setFormData({...formData, email: value});
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(value).toLowerCase())) {
            setErrors({...errors, email: 'Wrong email format!'});
            if(!value) setErrors({...errors, email: 'Field cannot be empty!'});
        } else setErrors({...errors, email: ''});
    }
    const passHandler = (value) => {
        setFormData({...formData, pass: value});
        if(value.length < 6 || value.length > 30) {
            setErrors({...errors, pass: 'Wrong length! (3 - 24)'});
            if(!value) setErrors({...errors, pass: 'Field cannot be empty!'});
        } else setErrors({...errors, pass: ''});
    }

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
                        <label htmlFor='email'>Email:</label>
                        <div className={style.inputWrapper}>
                            {(dirtyData.email && errors.email) && <div className={style.error}>{errors.email}</div>}
                            <input 
                                className={style.input} 
                                type="email" 
                                id='email' 
                                name='email'
                                value={formData.email}
                                onBlur={e => blurHandler(e)}
                                onChange={e => emailHandler(e.target.value)}
                            />
                        </div>
                        <label htmlFor='pass'>Password:</label>
                        <div className={style.inputWrapper}>
                            {(dirtyData.pass && errors.pass) && <div className={style.error}>{errors.pass}</div>}
                            <input 
                                className={style.input} 
                                type="password" 
                                id='pass' 
                                name='pass'
                                value={formData.pass}
                                onBlur={e => blurHandler(e)}
                                onChange={e => passHandler(e.target.value)}
                            />
                        </div>
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