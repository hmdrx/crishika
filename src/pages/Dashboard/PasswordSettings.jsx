import React from 'react';
import Wrapper from '../../components/UI/Wrapper';
import classes from './PasswordSettings.module.css';
import Input from '../../components/UI/Input'

const PasswordSettings = () => {
  return <div className={classes.container} >
    <Wrapper>
      Update password
      <Input/>
    </Wrapper>
    <Wrapper>
      Reset password
    </Wrapper>
  </div>;
};

export default PasswordSettings;
