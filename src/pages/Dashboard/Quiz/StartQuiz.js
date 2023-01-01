import { Button, Chip, Container, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const BeforeQuiz = () => {
  const [sub, setSub] = useState('');
  const [chip, setChip] = useState();

  const handleChange = event => {
    setSub(event.target.value);
  };

  const handleClick = value => {
    console.log(value);
    setChip(value);
  };
  return (
    <Container>
      <Stack component="form" maxWidth={400} sx={{ m: 'auto', mt: 4 }}>
        <Typography
          color="secondary"
          variant="body1"
          sx={{ textAlign: 'center', my: 2 }}
        >
          Start Quiz
        </Typography>
        <Box sx={{ minWidth: 120, mb: 2 }}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Subject</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sub}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={0}>Agronomy</MenuItem>
              <MenuItem value={1}>Pathology</MenuItem>
              <MenuItem value={2}>Nematology</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2">Question</Typography>
          <Stack direction="row" justifyContent="space-between">
            <Chip
              label="10"
              variant={chip === 10 ? 'contained' : 'outlined'}
              onClick={handleClick.bind(this, 10)}
              sx={{ minWidth: '8rem' }}
            />
            <Chip
              label="20"
              variant={chip === 20 ? 'contained' : 'outlined'}
              onClick={handleClick.bind(this, 20)}
              sx={{ minWidth: '8rem' }}
            />
            <Chip
              label="30"
              variant={chip === 30 ? 'contained' : 'outlined'}
              onClick={handleClick.bind(this, 30)}
              sx={{ minWidth: '8rem' }}
            />
          </Stack>
        </Box>
        <Box sx={{ mb: 4 }}>
          <Typography variant="body2">Time</Typography>
          <Stack direction="row" justifyContent="space-between">
            <Chip
              label="10 s"
              variant={chip === '10s' ? 'contained' : 'outlined'}
              onClick={handleClick.bind(this, '10s')}
              sx={{ minWidth: '8rem' }}
            />
            <Chip
              label="20 s"
              variant={chip === '20s' ? 'contained' : 'outlined'}
              onClick={handleClick.bind(this, '20s')}
              sx={{ minWidth: '8rem' }}
            />
            <Chip
              label="30 s"
              variant={chip === '30s' ? 'contained' : 'outlined'}
              onClick={handleClick.bind(this, '30s')}
              sx={{ minWidth: '8rem' }}
            />
          </Stack>
        </Box>
        <Button
          size='small'
          variant="contained"
          sx={{ alignSelf: 'flex-start' }}
          endIcon={<PlayArrowIcon />}
        >
          Start
        </Button>
      </Stack>
    </Container>
  );
};

export default BeforeQuiz;
