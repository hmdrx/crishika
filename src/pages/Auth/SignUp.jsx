import Auth from '../../components/Auth/Auth';
import { SignupForm } from '../../components/Auth/AuthForm';

const icon = require('../../Assests/Images/register.png');
const text = 'Create Your Account Its Free!';

const SignUp = () => {
  return (
    <Auth icon={icon} text={text}>
      <SignupForm />
    </Auth>
  );
};

export default SignUp;
