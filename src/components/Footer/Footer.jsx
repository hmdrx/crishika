import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.footer}>
        <div className={classes['footer__left']}>
          <h1>Crishika</h1>
          <p>support@crishika.com</p>
          <p>Phone +91 8349006546</p>
        </div>
        <div className={classes['footer__middle']}>
          <p>Locate Us</p>
          <p>NH 130, nawagaon</p>
          <p>Deobhog, gariyaband CG</p>
          <p>493890 IN</p>
        </div>

        <div className={classes['footer__right']}>
          <ul>
            <li>Privacy policy</li>
            <li>Terms & conditions</li>
            <li>Collaboration</li>
          </ul>
        </div>
      </div>
      <div className={classes.copywright}>
        <p>Copyright Reserved Crishika</p>
      </div>
    </div>
  );
};

export default Footer;
