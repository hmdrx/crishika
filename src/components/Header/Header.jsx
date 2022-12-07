import { Link, NavLink } from 'react-router-dom';
import Button from '../UI/Button';
import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.container}>
      <div className={classes.container__left}>
        <ul>
          <li>
            <Link
              to="/"
              className={({ isActive }) =>
                isActive ? classes['navlink-active'] : classes.navlink
              }
            >
              <img
                id={classes.logo}
                src={require('../../Assests/Images/logo-512.png')}
                alt="crishika logo"
              />
            </Link>
          </li>
          <li>
            <NavLink
              to="pricing"
              className={({ isActive }) =>
                isActive ? classes['navlink-active'] : classes.navlink
              }
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about_us"
              className={({ isActive }) =>
                isActive ? classes['navlink-active'] : classes.navlink
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive ? classes['navlink-active'] : classes.navlink
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={classes.container__right}>
        <ul>
          <li>
            <Link to="login">
              <Button
                // style={{
                //   background: 'transparent',
                //   color: 'var(--dark)',
                // }}
              >
                Login
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
