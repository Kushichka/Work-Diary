import style from './SignUpForm.module.scss';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
    return (
        <div className={style.signUpForm}>
            <form>
                <div className={style.titleWrapper}>
                    <p className={style.title}>Create Account</p>
                </div>
                <div className={style.wrapper}>
                    <div className={style.formWrapper}>
                        <div className={style.labels}>
                            <label htmlFor='inputFirstName'>First Name:</label>
                            <label htmlFor='inputLastName'>Last Name:</label>
                            <label htmlFor='inputEmail'>Email:</label>
                            <label htmlFor='inputPass'>Password:</label>
                        </div>
                        <div className={style.inputs}>
                            <input className={style.input} type="text" id='inputFirstName' />
                            <input className={style.input} type="text" id='inputLastName' />
                            <input className={style.input} type="email" id='inputEmail' />
                            <input className={style.input} type="password" id='inputPass' />
                        </div>
                    </div>
                </div>
                <div className={style.btns}>
                    <button className={style.btnSignUp}>Sign Up</button>
                    <Link className={style.btnSignIn} to='/signin'>
                        <p>Sign In</p>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default SignUpForm;