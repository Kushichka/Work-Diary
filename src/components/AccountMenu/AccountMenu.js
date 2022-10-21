import { useDispatch } from 'react-redux';
import s from './AccountMenu.module.scss';
import { onLogOut } from '../../redux/actions';

const AccountMenu = () => {

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(onLogOut());
    }
    
    return (
        <>
            <div className={s.accountMenu}>
                <p className={s.accountName}>
                    Hello <span>Viktor</span>
                </p>
                <button className={s.accountBtn} onClick={(e) => handleSubmit(e)}>Log Out</button>
            </div>
        </>
    );
}

export default AccountMenu;