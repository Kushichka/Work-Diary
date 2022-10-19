import { useSelector } from 'react-redux';
import AccountMenu from '../AccountMenu/AccountMenu';
import s from './NavBar.module.scss';

const NavBar = () => {

    const isLogged = useSelector((state) => state.isLogged);

    return (
        <div className={s.navBar}>
            <p className={s.logo}>Work Diary</p>    
            {isLogged &&
                <AccountMenu />
            }
        </div>
    );
}
 
export default NavBar;