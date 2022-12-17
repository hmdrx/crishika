import { Box, Container, Stack, Typography } from '@mui/material';
import { cards } from '../../../data/data';
import OverallReportCard from './OverallReportCard';
import SubReportCard from './SubReportCard';

const Performance = () => {
  return (
    <Box>
      <Container sx={{p:2}}>
        <Typography sx={{ textAlign: 'center' }} variant="body1">
          Overall Performance
        </Typography>
        <Stack direction="row" flexWrap="wrap" justifyContent="space-evenly">
          {cards.map(el => {
            return <OverallReportCard />;
          })}
        </Stack>
      </Container>
      <Container sx={{p:2}} >
        <Typography sx={{ textAlign: 'center' }} variant="body1">
          Subject Wise Report
        </Typography>

        <Stack direction="row" flexWrap="wrap" justifyContent="space-evenly">
          {cards.map(el => {
            return <SubReportCard />;
          })}
        </Stack>
      </Container>
    </Box>
  );
};

export default Performance;
