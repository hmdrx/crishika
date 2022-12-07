import React from 'react';
import classes from './Auth.module.css';

const logo = require('../../Assests/Images/logo-512.png');

const Auth = ({ children, icon, text }) => {
  return (
  <div className={classes['outer-container']} >

    <div className={classes.container}>
      <div className={classes.left}>
        <img src={logo} style={{ width: 85 }} alt="logo" />
        <h1>Crishika</h1>
        <p>{text}</p>
        <img src={icon} style={{ width: 308 }} alt="sign up icon" />
      </div>
      <div className={classes.right}>{children}</div>
    </div>
  </div>
  );
};

export default Auth;
