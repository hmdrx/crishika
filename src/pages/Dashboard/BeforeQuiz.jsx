import BeforeQuizForm from '../../components/Dashboard/BeforeQuizForm';
import classes from './BeforeQuiz.module.css';

const BeforeQuiz = () => {
  return (
    <div className={classes.container} >
      <div className={classes.title}>
        <p>Select an appropriate options to start quiz</p>
      </div>
      <div className={classes['form__container']}>
        <BeforeQuizForm />
      </div>
    </div>
  );
};

export default BeforeQuiz;
