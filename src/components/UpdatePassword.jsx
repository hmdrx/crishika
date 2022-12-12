import React from 'react'
import classes from './UpdatePassword.module.css';
import Input from './UI/Input'
import Button from './UI/Button'

const UpdatePassword = () => {
  return (
    <form className={classes.form}>
    <label>Current Password</label>
    <Input mb="2rem" />
    <label>New Password</label>
    <Input mb="2rem" />
    <label>Confirm New Password</label>
    <Input mb="2rem" />
    <Button>Submit</Button>
  </form>
  )
}

export default UpdatePassword