import React from 'react';
// import Card from '../../components/UI/Card';
// import Wrapper from '../../components/UI/Wrapper';
import classes from './AccountDetails.module.css';

import edit from '../../Assests/Svg/edit-outlined.svg';

const AccountDetails = () => {
  return (
    <div className={classes.container} >
      <div className={classes.card}>
        <div className={classes['card__title']}>
          <h1>Personal details</h1>
            <img
              src={edit}
              alt="edit icon"
            />
        </div>
        <div className={classes['card__details']}>
          <p>Name</p>
          <span>HUMENDRA</span>
        </div>
        <div className={classes['card__details']}>
          <p>Email</p>
          <span>humendrx@gmail.com</span>
        </div>
        <div className={classes['card__details']}>
          <p>Mobile</p>
          <span>8349006546</span>
        </div>
      </div>
      <div className={classes.card}>
      <div className={classes['card__title']}>
          <h1>Academic details</h1>
            <img
              src={edit}
              alt="edit icon"
            />
        </div>
        <div className={classes['card__details']}>
          <p>Degree</p>
          <span>B.Sc. Agriculture</span>
        </div>
        <div className={classes['card__details']}>
          <p>Status</p>
          <span>Persuing</span>
        </div>
        <div className={classes['card__details']}>
          <p>College</p>
          <span>
            Barrister Thakur Chhedilal College of Agriculture Bilaspur CG
          </span>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
