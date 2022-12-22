import hero from '../../../assests/svg/hero.svg';
import { Box, Button, Container, Typography } from '@mui/material';
import { colors } from '../../../constants/colors';

const Hero = () => {
  return (
    <Box sx={{ bgcolor: colors.bg, py: 10 }}>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography variant="h2" component="h1">
            Welcome to crishika
          </Typography>
          <Typography variant="body1" component="p">
            Lorem ipsum dolor sit amet consectetur.
          </Typography>
          <Button variant="contained" color="secondary" sx={{ mt: 8 }}>
            Get Started!
          </Button>
        </Box>
        <Box
          sx={{ maxWidth: '54rem' }}
          component="img"
          src={hero}
          alt="hero image"
        />
      </Container>
    </Box>
  );
};

export default Hero;
