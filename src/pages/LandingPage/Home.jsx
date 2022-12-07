import React from 'react';
import classes from './Home.module.css';

import Hero from '../../components/Hero';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className={classes.section1}>
        <div className={classes.section1__left}>
          <h2>Our most powerful engine to date</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque,
            odit?
          </p>
          <Button>Our portfolio</Button>
        </div>
        <div className={classes.section1__right}>
          <img
            src={require('../../Assests/Images/logo-512.png')}
            alt="some design"
          />
        </div>
      </div>
      <div className={classes.section2}>
        <h1>Our Services</h1>
        <div className={classes.section2__inner_container}>
          <div className={classes.section2__card}>
            <img
              src={require('../../Assests/Images/logo-512.png')}
              alt="showcase"
            />
            <h1>Graphic designing</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, debitis? Voluptas tempora nisi rerum cupiditate!
            </p>
          </div>
          <div className={classes.section2__card}>
            <img
              src={require('../../Assests/Images/logo-512.png')}
              alt="showcase"
            />
            <h1>Graphic designing</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, debitis? Voluptas tempora nisi rerum cupiditate!
            </p>
          </div>
          <div className={classes.section2__card}>
            <img
              src={require('../../Assests/Images/logo-512.png')}
              alt="showcase"
            />
            <h1>Graphic designing</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, debitis? Voluptas tempora nisi rerum cupiditate!
            </p>
          </div>
        </div>
      </div>
      <div className={classes.section3}>
        <h1>Our Products</h1>
        <div className={classes.section3__inner_container}>
          <div className={classes.section3__inner_container_left}>
            <img
              src={require('../../Assests/Images/logo-512.png')}
              alt="showcase"
            />
          </div>
          <div className={classes.section3__inner_container_right}>
            <div className={classes.section3__inner_container_right_item}>
              <h2>
                <i src={require('../../Assests/Svg/blue-tick.svg')}></i>
                <span>LYK App</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className={classes.section3__inner_container_right_item}>
              <h2>
                <i src={require('../../Assests/Svg/blue-tick.svg')}></i>
                <span>LYK App</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className={classes.section3__inner_container_right_item}>
              <h2>
                <i src={require('../../Assests/Svg/blue-tick.svg')}></i>
                <span>LYK App</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.section4}>
        <h1>Start using our services today</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          repudiandae minus ipsam velit eveniet consequatur! Voluptates
          molestiae assumenda illo deleniti quis unde ducimus labore accusantium
          voluptatibus maxime? Quibusdam.
        </p>
        <Button>Enroll Now</Button>
      </div>
      <div className={classes.section5}>
        <h1>Contact Us</h1>
        <h2>We'd like to hear from you</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sunt
          aperiam exercitationem sapiente temporibus eaque minima porro odio.
        </p>
        <div className={classes.section5__form}>
          <Input />
          <Input />
          <Button>Submit</Button>
        </div>
        <div className={classes.section5__info}>
          <p>info@crishika.com</p>
          <p>+91 8349006546</p>
          <p>NH 130 Nawagaon</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
