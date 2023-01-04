import { Box, Container, Grid, Typography } from '@mui/material';
import { cards } from '../../../data/data';
import OverallReportCard from './OverallReportCard';
import SubReportCard from './SubReportCard';

const Performance = () => {
  return (
    <Box>
      <Container sx={{ p: 2 }}>
        <Typography sx={{ textAlign: 'center' }} variant="body1">
          Overall Performance
        </Typography>

        <Grid container>
          {cards.map(el => (
            <Grid item xs={4} md={2} key={el}>
              <OverallReportCard />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container sx={{ p: 2 }}>
        <Typography sx={{ textAlign: 'center' }} variant="body1">
          Subject Wise Report
        </Typography>

        <Grid container columnSpacing={1}>
          {cards.map(el => (
            <Grid item xs={6} md={3} key={el}>
              <SubReportCard />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Performance;
