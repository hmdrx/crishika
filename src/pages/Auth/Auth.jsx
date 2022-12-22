import React from 'react';
import {
  Box,
  Container,
  Divider,
  Typography,
} from '@mui/material';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
const logo = require('../../assets/images/logo-512.png');


const Auth = ({icon, greetingText, link, linkText, children}) => {
  return (
    <Container disableGutters >

    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: { md: 'center' },
      }}
    >
      <Stack
        direction={{ sm: 'row' }}
        divider={<Divider orientation="vertical" flexItem />}
        spacing={{ xs: 4 }}
        p={4}
        sx={{ borderRadius: 1, overflow: 'hidden', bgcolor: 'white' }}
      >
        <Stack alignItems="center">
          <Box component="img" sx={{ width: '8.5rem' }} src={logo} />
          <Typography
            variant="subtitle1"
            component="h1"
            sx={{
              fontWeight: 'bold',
              textTransform: 'uppercase',
              color: 'primary.main',
            }}
          >
            Crishika
          </Typography>
          <Typography mt={3}>{greetingText}</Typography>
          <Box
            component="img"
            mt={4}
            sx={{ maxWidth: '100%', display: { xs: 'none', sm: 'block' } }}
            src={icon}
          />
        </Stack>
        <Stack justifyContent="space-between">
          {children}
          <Typography mt={4} variant="body2">
           {linkText}
            <Link to={`/${link}`} color="info.main">
             {link}
            </Link>
          </Typography>
        </Stack>
      </Stack>
    </Box>
    </Container>

  );
};

export default Auth;
