import { Divider, Paper, Typography } from '@mui/material';

const OverallReportCard = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        textAlign: 'center',
        color: 'gray',
        overflow: 'hidden',
        m: '0.5rem',
        p: 1,
        bgcolor: 'transparent',
        minHeight: '8rem',
      }}
    >
      <Typography variant="h6">1023</Typography>
      <Divider />
      <Typography variant="body2">Total questions</Typography>
    </Paper>
  );
};

export default OverallReportCard;
