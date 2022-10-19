import Button from '../Button/Button';
import s from './AccountMenu.module.scss';

const AccountMenu = () => {
    return (
        <>
            <div className={s.accountMenu}>
                <p className={s.accountName}>
                    Hello <span>Viktor</span>
                </p>
                <Button name='Log Out' />
            </div>
        </>
    );
}

export default AccountMenu;