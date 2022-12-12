import { Link, NavLink, Outlet } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

import classes from './Layout.module.css';

const Layout = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
      <Link to="/dashboard" className={classes.home_nav}>
              <AiFillHome className={classes.icon}  />
            </Link>
        <div className={classes.profile}>

          <div className={classes.profile__image}>
            <img
              src={require('../../Assests/Images/Humendra.JPG')}
              alt="profile"
            />
          </div>
          <h1>Humendra</h1>
        </div>
        <div className={classes.menu}>
          {/* <li>
            <Link to="/dashboard" className={classes.home_nav}>
              <AiFillHome className={classes.icon}  />
            </Link>
          </li> */}
          {/* <li>
            <NavLink
              to="report"
              className={({ isActive }) =>
                isActive ? classes['navlink-active'] : classes.navlink
              }
            >
              <img
                src={require('../../Assests/Icons/diagram.png')}
                alt="quiz_icon"
              />  
              Performance
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="exam_exercise"
              className={({ isActive }) =>
                isActive ? classes['navlink-active'] : classes.navlink
              }
            >
              <img
                src={require('../../Assests/Icons/quiz.png')}
                alt="quiz_icon"
              />
              Crishika test
            </NavLink>
          </li>
          <li>
            <NavLink
              to="account_details"
              className={({ isActive }) =>
                isActive ? classes['navlink-active'] : classes.navlink
              }
            >
              <img
                src={require('../../Assests/Icons/account.png')}
                alt="quiz_icon"
              />
              Account details
            </NavLink>
          </li>
          <li>
            <NavLink
              to="password_settings"
              className={({ isActive }) =>
                isActive ? classes['navlink-active'] : classes.navlink
              }
            >
              <img
                src={require('../../Assests/Icons/lock.png')}
                alt="quiz_icon"
              />
              Password settings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="logout"
              className={({ isActive }) =>
                isActive ? classes['navlink-active'] : classes.navlink
              }
            >
              <img
                src={require('../../Assests/Icons/logout.png')}
                alt="quiz_icon"
              />
              Logout
            </NavLink>
          </li>
        </div>
      </div>
      <div className={classes.right}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
