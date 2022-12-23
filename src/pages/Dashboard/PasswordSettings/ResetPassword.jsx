import React from 'react';
import { Box, Button, Divider, Stack, TextField, Typography } from '@mui/material';

const ResetPassword = () => {
  return (
    // <form className={classes.form}>
    //   <div className={classes.otp}>
    //     <p>humendrx@gmail.com</p>
    //     <Button>Send OTP</Button>
    //   </div>


    <Box component="form">

<Stack direction='row' justifyContent='space-between' alignItems='center' >
  <Typography variant='body2' component='p'>humendrx@gmail.com</Typography>
  <Button variant="outlined" >Send OTP</Button>
</Stack>

      <TextField
        label="OTP"
        margin="normal"
        fullWidth
        size="small"
        sx={{ width: '15ch', display: 'block' }}
      />
      <Divider/>
      <TextField
        label="New Password"
        margin="normal"
        fullWidth
        size="small"
        sx={{ width: '40ch', display: 'block' }}
      />
      <TextField
        label="Confirm New Password"
        margin="normal"
        fullWidth
        size="small"
        sx={{ width: '40ch', display: 'block' }}
      />

      <Button variant="contained" component="button" sx={{ mt: 1 }}>
        Reset
      </Button>
    </Box>
  );
};

export default ResetPassword;
