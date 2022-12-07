import Card from '../../components/UI/Card';
import Wrapper from '../../components/UI/Wrapper';
import classes from './Performance.module.css';

const Performance = () => {
  return (
    <div className={classes.container} >
      <Wrapper className={classes['overall-report']}>
        <h1>Overall Performance</h1>
        <div className={classes['overall-report-card-container']} >

        <Card className={classes['overall-report__card']}>
          <h1>1023</h1>
          <p>Total questions</p>
        </Card>
        <Card className={classes['overall-report__card']}>
          <h1>600</h1> 
          <p>Right Answers</p>
        </Card>
        <Card className={classes['overall-report__card']}>
          <h1>400</h1>
          <p>Wrong Answers</p>
        </Card>
        <Card className={classes['overall-report__card']}>
          <h1>389</h1>
          <p>Unanswered</p>
        </Card>
        <Card className={classes['overall-report__card']}>
          <h1>Good</h1>
          <p>Result</p>
        </Card>
        </div>
      </Wrapper>
      <Wrapper className={classes['subject-report']}>
        <h1>Subject Wise Report</h1>
        <div className={classes['card-container']}>
          <Card className={classes['subject-report__card']}>
            <h1>Agronomy</h1>
            <hr />
            <div className={classes['card__item']}>
              <p>Total questions</p>
              <span>100</span>
            </div>
            <div className={classes['card__item']}>
              <p>Right Answers</p>
              <span>50</span>
            </div>
            <div className={classes['card__item']}>
              <p>Wrong Answers</p>
              <span>30</span>
            </div>
            <div className={classes['card__item']}>
              <p>Unanswered</p>
              <span>20</span>
            </div>
            <div className={classes['card__item']}>
              <p>Result</p>
              <span>good</span>
            </div>
          </Card>
          <Card className={classes['subject-report__card']}>
            <h1>Agronomy</h1>
            <hr />
            <div className={classes['card__item']}>
              <p>Total questions</p>
              <span>100</span>
            </div>
            <div className={classes['card__item']}>
              <p>Right Answers</p>
              <span>50</span>
            </div>
            <div className={classes['card__item']}>
              <p>Wrong Answers</p>
              <span>30</span>
            </div>
            <div className={classes['card__item']}>
              <p>Unanswered</p>
              <span>20</span>
            </div>
            <div className={classes['card__item']}>
              <p>Result</p>
              <span>good</span>
            </div>
          </Card>
          <Card className={classes['subject-report__card']}>
            <h1>Agronomy</h1>
            <hr />
            <div className={classes['card__item']}>
              <p>Total questions</p>
              <span>100</span>
            </div>
            <div className={classes['card__item']}>
              <p>Right Answers</p>
              <span>50</span>
            </div>
            <div className={classes['card__item']}>
              <p>Wrong Answers</p>
              <span>30</span>
            </div>
            <div className={classes['card__item']}>
              <p>Unanswered</p>
              <span>20</span>
            </div>
            <div className={classes['card__item']}>
              <p>Result</p>
              <span>good</span>
            </div>
          </Card>
          <Card className={classes['subject-report__card']}>
            <h1>Agronomy</h1>
            <hr />
            <div className={classes['card__item']}>
              <p>Total questions</p>
              <span>100</span>
            </div>
            <div className={classes['card__item']}>
              <p>Right Answers</p>
              <span>50</span>
            </div>
            <div className={classes['card__item']}>
              <p>Wrong Answers</p>
              <span>30</span>
            </div>
            <div className={classes['card__item']}>
              <p>Unanswered</p>
              <span>20</span>
            </div>
            <div className={classes['card__item']}>
              <p>Result</p>
              <span>good</span>
            </div>
          </Card>
          <Card className={classes['subject-report__card']}>
            <h1>Agronomy</h1>
            <hr />
            <div className={classes['card__item']}>
              <p>Total questions</p>
              <span>100</span>
            </div>
            <div className={classes['card__item']}>
              <p>Right Answers</p>
              <span>50</span>
            </div>
            <div className={classes['card__item']}>
              <p>Wrong Answers</p>
              <span>30</span>
            </div>
            <div className={classes['card__item']}>
              <p>Unanswered</p>
              <span>20</span>
            </div>
            <div className={classes['card__item']}>
              <p>Result</p>
              <span>good</span>
            </div>
          </Card>
          <Card className={classes['subject-report__card']}>
            <h1>Agronomy</h1>
            <hr />
            <div className={classes['card__item']}>
              <p>Total questions</p>
              <span>100</span>
            </div>
            <div className={classes['card__item']}>
              <p>Right Answers</p>
              <span>50</span>
            </div>
            <div className={classes['card__item']}>
              <p>Wrong Answers</p>
              <span>30</span>
            </div>
            <div className={classes['card__item']}>
              <p>Unanswered</p>
              <span>20</span>
            </div>
            <div className={classes['card__item']}>
              <p>Result</p>
              <span>good</span>
            </div>
          </Card>
        </div>
      </Wrapper>
    </div>
  );
};

export default Performance;
