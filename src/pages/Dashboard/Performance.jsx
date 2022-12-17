import { Box, Container, Divider, Paper, Typography } from '@mui/material';
import Card from '../../components/UI/Card';
import Wrapper from '../../components/UI/Wrapper';
import { colors } from '../../constants/colors';
import classes from './Performance.module.css';

const Performance = () => {
  return (
    <Box>
      <Container>
        <Typography sx={{ textAlign: 'center' }} variant="body1">
          Overall Performance
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Paper
            elevation={3}
            sx={{
              textAlign: 'center',
              // bgcolor: colors.bg,
              color: 'gray',
              overflow: 'hidden',
            }}
          >
            <Box sx={{ p: 2 }}>
              <Typography variant="h4">1023</Typography>
            </Box>
            <Divider />
            <Box sx={{ p: 2 }}>
              <Typography variant="body1" sx={{ minHeight: '6rem' }}>
                Total questions
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Container>
      <Container>
        <Typography sx={{ textAlign: 'center' }} variant="body1">
          Subject Wise Report
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}
        >
          <Paper
            sx={{
              display: 'flex',
              flexDirection: 'column',
              p: 2,
              minWidth: '18rem',
            }}
          >
            <Typography
              sx={{ textAlign: 'center', pb: '.5rem' }}
              variant="body1"
            >
              Agronomy
            </Typography>
            <Divider />
            <Box sx={{ display: 'flex', py: '.5rem' }}>
              <Typography sx={{ flex: 3 }} variant="body2">
                Total questions
              </Typography>
              <Typography sx={{ flex: 1 }} variant="body2">
                100
              </Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Typography sx={{ flex: 3 }} variant="body2">
                Right Answers
              </Typography>
              <Typography sx={{ flex: 1 }} variant="body2">
                100
              </Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Typography sx={{ flex: 3 }} variant="body2">
                Wrong Answers
              </Typography>
              <Typography sx={{ flex: 1 }} variant="body2">
                100
              </Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Typography sx={{ flex: 3 }} variant="body2">
                Unanswered
              </Typography>
              <Typography sx={{ flex: 1 }} variant="body2">
                100
              </Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Typography sx={{ flex: 3 }} variant="body2">
                Result
              </Typography>
              <Typography sx={{ flex: 1 }} variant="body2">
                100
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Performance;
