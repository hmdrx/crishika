import { Box, Stack, Typography } from '@mui/material';
import DashboardBg from '../../../components/DashboardBg';
import ReportItem from './ReportItem';

const Report = () => {
  return (
    <DashboardBg>
      <Stack sx={{ minheight: '100vh', p: {md: 4} }} alignItems="center">
        <Box
          sx={{
            flex: 1,
            width: '100%',
            maxWidth: '100rem',
            borderRadius: 5,
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(2.2rem)',
            px: {md: 8, xs: 2},
            py: 4,
            overflow: 'hidden',
          }}
        >
          <Typography sx={{textAlign: 'center', mb: 2}} variant='h5' >Quiz report</Typography>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2">Result: 8/10</Typography>
            <Typography variant="body2">Time: 10 minute</Typography>
          </Stack>

          <ReportItem />
          <ReportItem />
          <ReportItem />
        </Box>
      </Stack>
    </DashboardBg>
  );
};

export default Report;
