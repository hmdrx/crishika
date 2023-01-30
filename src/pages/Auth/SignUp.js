import { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  Link,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import Auth from './Auth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const icon = require('../../assets/images/register.png');
const greetingText = 'Create Your Account Its Free!';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({
    open: false,
    message: '',
  });
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const inputChangeHandler = e => {
    const value = e.target.value;
    const field = e.target.name;
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const closeHandler = () => {
    setError(prev => ({ ...prev, open: false }));
  };

  const onRegisterHandler = e => {
    e.preventDefault();
    (async () => {
      try {
        const response = await axios.post('/api/v1/user/register', inputs);

        if (response.data) {
          console.log(response.data);
        }

        navigate('/login');
      } catch (error) {
        setError(prev => ({
          open: true,
          message: error.response.data.message,
        }));
        // console.log(error.response.data.message);
      }
    })();
  };

  // const handleMouseDownPassword = event => {
  //   event.preventDefault();
  // };
  return (
    <Auth
      greetingText={greetingText}
      linkText="Already have account? "
      link="Login"
      icon={icon}
    >
      <Snackbar
        open={error.open}
        onClose={closeHandler}
        message={error.message}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
      <Box component="form" maxWidth={'35rem'}>
        <Typography textAlign="center" variant="h6">
          Sign Up
        </Typography>
        <TextField
          fullWidth
          margin="dense"
          label="Name"
          name="name"
          variant="standard"
          type="text"
          value={inputs?.name}
          onChange={inputChangeHandler}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Email"
          name="email"
          variant="standard"
          type="email"
          value={inputs?.email}
          onChange={inputChangeHandler}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Create Password"
          variant="standard"
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={inputs?.password}
          onChange={inputChangeHandler}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Confirm Password"
          variant="standard"
          name="confirmPassword"
          type={showPassword ? 'text' : 'password'}
          value={inputs?.confirmPassword}
          onChange={inputChangeHandler}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="caption" component="span">
            By signing up you are accepting our{' '}
            <Link
              href="#"
              variant="caption"
              underline="hover"
              color="info.main"
            >
              terms&conditions
            </Link>
          </Typography>

          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            // onMouseDown={handleMouseDownPassword}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </Box>

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 6 }}
          onClick={onRegisterHandler}
        >
          Sign Up
        </Button>
      </Box>
    </Auth>
  );
};

export default SignUp;
