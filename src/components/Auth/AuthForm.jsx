import Button from '../UI/Button';
import Input from '../UI/Input';

import classes from './AuthForm.module.css';

export const SignupForm = () => {
  return (
    <form>
      <h1>Sign Up</h1>
      <div className={classes.inputs}>
        <Input placeholder="Name" mb="3.3rem" />
        <Input placeholder="Email" mb="3.3rem" />
        <Input placeholder="Create password" mb="3.3rem" />
        <Input placeholder="Confirm password" />
      </div>
      <p>By signing up you agreeing to our terms & conditions</p>
      <Button
        style={{
          margin: '5rem 0',
          height: '3rem',
          width: '14rem',
        }}
      >
        REGISTER
      </Button>
      <p>Already have account? Login</p>
    </form>
  );
};
export const LoginForm = () => {
  return (
    <form>
      <h1>Login</h1>
      <div className={classes.inputs}>
        <Input placeholder="Email" mb="3.3rem" />
        <Input placeholder="Password" />
      </div>
      <Button
        style={{
          margin: '5rem 0',
          height: '3rem',
          width: '14rem',
        }}
      >
        LOGIN
      </Button>
      <p>You do not have account? SignUp</p>
    </form>
  );
};
