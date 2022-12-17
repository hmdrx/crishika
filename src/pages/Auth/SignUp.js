import { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import Auth from './Auth';
const icon = require('../../Assests/Images/register.png');
const greetingText = 'Create Your Account Its Free!';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  return (
    <Auth
      greetingText={greetingText}
      linkText="Already have account? "
      link="Login"
      icon={icon}
    >
      <Box component="form" maxWidth={'35rem'}>
        <Typography textAlign="center" variant="h6">
          Sign Up
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          variant="standard"
          type="text"
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          variant="standard"
          type="email"
        />
        <TextField
          fullWidth
          margin="normal"
          label="Create Password"
          variant="standard"
          type={showPassword ? 'text' : 'password'}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Confirm Password"
          variant="standard"
          type={showPassword ? 'text' : 'password'}
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
            onMouseDown={handleMouseDownPassword}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </Box>

        <Button fullWidth variant="contained" component="button" sx={{ mt: 6 }}>
          Sign Up
        </Button>
      </Box>
    </Auth>
  );
};

export default SignUp;
