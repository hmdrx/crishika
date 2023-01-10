import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { cards, subCard } from '../../../data/data';
import MyChart from './Chart';
import OverallReportCard from './OverallReportCard';
import SubReportCard from './SubReportCard';

const Performance = () => {
  return (
    <Container sx={{ p: 0 }}>
      <Typography sx={{ textAlign: 'center' }} variant="body1">
        Overall Performance
      </Typography>
      <Stack
        sx={{ py: 2 }}
        direction={{ xs: 'column-reverse', md: 'row' }}
        justifyContent="space-around"
        alignItems="center"
      >
        <Box sx={{ flex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Typography variant="h5">3209</Typography>
            <Typography variant="body2">Questions Attempted</Typography>
            {/* <Divider sx={{ mt: 1 }} /> */}
          </Box>
          <Stack
            sx={{ flexWrap: 'wrap' }}
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            columnSpacing={1}
          >
            {cards.map(el => (
              <OverallReportCard field={el.field} value={el.value} />
            ))}
          </Stack>
        </Box>
        <Stack sx={{ flex: 1 }} direction="row" justifyContent="center">
          {<MyChart />}
        </Stack>
      </Stack>
      <Typography sx={{ textAlign: 'center' }} variant="body1">
        Subject Wise Report
      </Typography>

      <Grid sx={{ py: 2 }} container columnSpacing={1}>
        {subCard.map(el => (
          <Grid item xs={6} md={3} key={el}>
            <SubReportCard el={el} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Performance;
