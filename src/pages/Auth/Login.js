import {
  Box,
  Button,
  IconButton,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import Auth from './Auth';
import { api } from '../../constants/API';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { showAlert } from '../../redux/alert-reducer';

const icon = require('../../assets/images/login.png');
const greetingText = 'Welcome back!';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputs, setInputs] = useState({ email: '', password: '' });

  // const auth = useSelector(state=> state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const onInputChangeHandler = e => {
    setInputs(prevVal => ({ ...prevVal, [e.target.name]: e.target.value }));
  };

  const loginHandler = () => {
    (async () => {
      try {
        const response = await axios.post(
          `${api.base_url}/api/v1/user/login`,
          inputs
        );
        if (response) {
          const { token } = response.data;

          dispatch(login(token));

          navigate('/dashboard', { replace: true });
        }
      } catch (error) {
        dispatch(showAlert(error.response.data.message));
      }
    })();
  };

  return (
    <Auth
      greetingText={greetingText}
      linkText="You don't have account? "
      link="Register"
      icon={icon}
    >
      <Box component="form" maxWidth={'35rem'}>
        <Typography textAlign="center" variant="h6">
          Login
        </Typography>
        <TextField
          fullWidth
          margin="dense"
          label="Email"
          name="email"
          size="small"
          variant="standard"
          type="email"
          value={inputs.email}
          onChange={onInputChangeHandler}
        />
        <TextField
          fullWidth
          size="small"
          variant="standard"
          margin="dense"
          label="Password"
          name="password"
          value={inputs.password}
          onChange={onInputChangeHandler}
          type={showPassword ? 'text' : 'password'}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link href="#" variant="body2" underline="hover" color="info.main">
            Forgot Password?
          </Link>
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </Box>
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 6 }}
          onClick={loginHandler}
        >
          Login
        </Button>
      </Box>
    </Auth>
  );
};

export default Login;
