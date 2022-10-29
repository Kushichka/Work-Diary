import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AccountMenu from '../AccountMenu/AccountMenu';
import style from './NavBar.module.scss';

const NavBar = () => {

    const isLogged = useSelector((state) => state.isLogged);

    return (
        <div className={style.navBar}>
            <Link className={style.logo} to='/'>
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
        <ul className={style.navMenu}>
            <li className={style.navItem}>
                <Link to='/MyHours'>
                    My Hours
                </Link>
            </li>
        </ul>
    );
}
