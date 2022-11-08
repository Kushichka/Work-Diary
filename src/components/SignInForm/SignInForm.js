import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './SignInForm.module.scss'
import { onLogin } from '../../redux/actions';

const SignInForm = () => {

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(onLogin());
   }

    return (
        <div className={style.signInForm}>
            <form>
                <div className={style.titleWrapper}>
                    <p className={style.title}>Log In</p>
                </div>
                <div className={style.wrapper}>
                    <div className={style.formWrapper}>
                        <div className={style.labels}>
                            <label htmlFor='inputEmail'>Email:</label>
                            <label htmlFor='inputPass'>Password:</label>
                        </div>
                        <div className={style.inputs}>
                            <input className={style.input} type="email" id='inputEmail' />
                            <input className={style.input} type="password" id='inputPass' />
                        </div>
                    </div>
                </div>
                <div className={style.btns}>
                    <button className={style.btnSignIn} onClick={(e) => handleSubmit(e)}>Sign In</button>
                    <Link className={style.btnSignUp} to='/signup'>
                        <p>Sign Up</p>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;