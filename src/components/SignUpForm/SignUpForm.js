import s from './SignUpForm.module.scss';

const SignUpForm = () => {
    return (
        <div className={s.signUpForm}>
            <form>
                <div className={s.titleWrapper}>
                    <p className={s.title}>Create Account</p>
                </div>
                <div className={s.wrapper}>
                    <div className={s.formWrapper}>
                        <div className={s.labels}>
                            <label htmlFor='inputFirstName'>First Name:</label>
                            <label htmlFor='inputLastName'>Last Name:</label>
                            <label htmlFor='inputEmail'>Email:</label>
                            <label htmlFor='inputPass'>Password:</label>
                        </div>
                        <div className={s.inputs}>
                            <input className={s.input} type="text" id='inputFirstName' />
                            <input className={s.input} type="text" id='inputLastName' />
                            <input className={s.input} type="email" id='inputEmail' />
                            <input className={s.input} type="password" id='inputPass' />
                        </div>
                    </div>
                </div>
                <div className={s.btns}>
                    <button className={s.btnSignUp}>Sign Up</button>
                </div>
            </form>
        </div>
    );
}

export default SignUpForm;