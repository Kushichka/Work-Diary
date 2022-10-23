import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AccountMenu from '../AccountMenu/AccountMenu';
import s from './NavBar.module.scss';

const NavBar = () => {

    const isLogged = useSelector((state) => state.isLogged);

    return (
        <div className={s.navBar}>
            <Link className={s.logo} to='/'>
                <p>Work Diary</p>
            </Link>
            {isLogged &&
                <>
                    <NavMenu />
                    <AccountMenu />
                </>
            }
        </div>
    );
}

export default NavBar;

export const NavMenu = () => {
    return (
        <ul className={s.navMenu}>
            <li className={s.navItem}>
                <Link to='/profile'>
                    Profile
                </Link>
            </li>
        </ul>
    );
}
