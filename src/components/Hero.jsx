import classes from './Hero.module.css';

import Button from './UI/Button';
import hero from '../Assests/hero.svg';

const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes['hero_left']}>
        <h1>Welcome to crishika</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <Button style={classes.button}>Get Started!</Button>
      </div>
      <div className={classes['hero_right']}>
        <img src={hero} alt="hero svg" />
      </div>
    </div>
  );
};

export default Hero;
