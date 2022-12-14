import { useState } from 'react';
import Button from '../../components/UI/Button';
import classes from './BeforeQuiz.module.css';



const BeforeQuiz = () => {
  const [isActive, setIsActive] = useState();

  const clickHandler = () => {
    setIsActive(true);
  };

  return (
    <div className={classes.container}>
      <div className={classes.quizform}>
        <h1>Crishika quiz</h1>
        <div className={classes.inputs}>
          <div>
            <label>Select subject</label>
          </div>
          <div>
            <label htmlFor="ques">Question</label>
            <div className={classes.input}>
              <input
                className={isActive && classes.active}
                onFocus={clickHandler}
                type="button"
                value="10"
              />
              <input
                className={isActive && classes.active}
                onFocus={clickHandler}
                type="button"
                value="20"
              />
              <input
                className={isActive && classes.active}
                onFocus={clickHandler}
                type="button"
                value="30"
              />
            </div>
          </div>
          <div>
            <label htmlFor="ques">Time required per question</label>
            <div className={classes.input}>
              <input
                className={isActive && classes.active}
                onFocus={clickHandler}
                type="button"
                value="20s"
              />
              <input
                className={isActive && classes.active}
                onFocus={clickHandler}
                type="button"
                value="30s"
              />
              <input
                className={isActive && classes.active}
                onFocus={clickHandler}
                type="button"
                value="60s"
              />
            </div>
          </div>
          <Button>Let's Start</Button>
        </div>
      </div>
    </div>
  );
};

export default BeforeQuiz;
