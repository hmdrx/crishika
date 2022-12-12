import React from 'react';
import classes from './PasswordSettings.module.css';
import { NavLink, Outlet } from 'react-router-dom';

const PasswordSettings = () => {
  return (
    <div className={classes.container}>
      <div className={classes.tabs}>
        <NavLink to='/dashboard/password_settings' className={({isActive})=>isActive? classes.active : classes.navlink} end>Update Password</NavLink>
        <NavLink to='reset' className={({isActive})=>isActive? classes.active : classes.navlink}>Reset Password</NavLink>
      </div>
      <Outlet/>
     
    </div>
  );
};

export default PasswordSettings;
