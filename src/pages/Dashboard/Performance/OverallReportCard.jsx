import { Box, Divider, Paper, Typography } from '@mui/material';

const OverallReportCard = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        textAlign: 'center',
        color: 'gray',
        overflow: 'hidden',
        m:1
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
  );
};

export default OverallReportCard;
