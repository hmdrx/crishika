import React from 'react';
import { Box, Button, TextField } from '@mui/material';

const UpdatePassword = () => {
  return (
    <Box component="form">
      <TextField
        label="Current Password"
        margin="normal"
        fullWidth
        size="small"
        sx={{ width: '40ch', display: 'block' }}
      />
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
        Update
      </Button>
    </Box>
  );
};

export default UpdatePassword;
