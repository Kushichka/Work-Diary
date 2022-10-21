import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import s from './SignInForm.module.scss'
import { onLogin } from '../../redux/actions';

const SignInForm = () => {

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(onLogin());
    }

    return (
        <div className={s.signInForm}>
            <form>
                <div className={s.titleWrapper}>
                    <p className={s.title}>Log In</p>
                </div>
                <div className={s.wrapper}>
                    <div className={s.formWrapper}>
                        <div className={s.labels}>
                            <label htmlFor='inputEmail'>Email:</label>
                            <label htmlFor='inputPass'>Password:</label>
                        </div>
                        <div className={s.inputs}>
                            <input className={s.input} type="email" id='inputEmail' />
                            <input className={s.input} type="password" id='inputPass' />
                        </div>
                    </div>
                </div>
                <div className={s.btns}>
                    <button className={s.btnSignIn} onClick={(e) => handleSubmit(e)}>Sign In</button>
                    <Link className={s.btnSignUp} to='/signup'>
                        <p>Sign Up</p>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;