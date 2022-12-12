import React from 'react';
import classes from './ResetPassword.module.css';
import Button from './UI/Button';
import Input from './UI/Input';

const ResetPassword = () => {
  return (
    <form className={classes.form}>
      <div className={classes.otp}>
        <p>humendrx@gmail.com</p>
        <Button>Send OTP</Button>
      </div>
      <div className={classes.inputs}>
        <label>OTP</label>
        <Input mb="2rem" />
        <label>New Password</label>
        <Input mb="2rem" />
        <label>Confirm New Password</label>
        <Input mb="2rem" />
      </div>
      <Button>Submit</Button>
    </form>
  );
};

export default ResetPassword;
