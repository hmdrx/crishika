import Auth from '../../components/Auth/Auth';
import { LoginForm } from '../../components/Auth/AuthForm';

const icon = require('../../Assests/Images/login.png');
const text = 'Welcome back!';

const Login = () => {
  return (
    <Auth text={text} icon={icon}>
      <LoginForm />
    </Auth>
  );
};

export default Login;
