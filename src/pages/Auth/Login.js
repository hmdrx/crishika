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
import { Visibility, VisibilityOff } from '@mui/icons-material';

const icon = require('../../Assests/Images/login.png');
const greetingText = 'Welcome back!';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Auth greetingText={greetingText} linkText="You don't have account? " link='Register' icon={icon}>
      <Box component="form" maxWidth={'35rem'}>
        <Typography textAlign="center" variant="h6">
          Login
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          size="small"
          variant="standard"
          type="email"
        />
        <TextField
          fullWidth
          size="small"
          variant="standard"
          margin="normal"
          label="Password"
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
        <Button fullWidth variant="contained" component="button" sx={{ mt: 6 }}>
          Login
        </Button>
      </Box>
    </Auth>
  );
};

export default Login;
