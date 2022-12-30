import { Box, Divider, Paper, Typography } from '@mui/material';

const SubReportCard = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        m: 1,
      }}
    >
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 2,
          minWidth: '18rem',
          bgcolor: 'transparent',
          backdropFilter: 'blur(1rem)',
        }}
      >
        <Typography sx={{ textAlign: 'center', pb: '.5rem' }} variant="body1">
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
  );
};

export default SubReportCard;
