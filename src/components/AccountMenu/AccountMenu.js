import { useDispatch } from 'react-redux';
import style from './AccountMenu.module.scss';
import { onLogOut } from '../../redux/actions';
import { useSelector } from 'react-redux';

const AccountMenu = () => {

    const dispatch = useDispatch();
    const firstName = useSelector(state => state.firstName);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(onLogOut());
    }
    
    return (
        <>
            <div className={style.accountMenu}>
                <p className={style.accountName}>
                    Hello <span>{firstName}</span>
                </p>
                <button className={style.accountBtn} onClick={(e) => handleSubmit(e)}>Log Out</button>
            </div>
        </>
    );
}

export default AccountMenu;