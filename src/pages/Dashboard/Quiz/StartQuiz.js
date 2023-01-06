import {
  Alert,
  Button,
  Chip,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { startExam, resetExam } from '../../../redux/question-reducer';
import { resetResult } from '../../../redux/result-reducer';
import { useNavigate } from 'react-router-dom';

const BeforeQuiz = () => {
  const [sub, setSub] = useState('');
  const [noOfQues, setNoOfQues] = useState(10);
  const [time, setTime] = useState(20);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();



  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubChange = event => {
    setSub(event.target.value);
  };

  const onNoOfQuesChange = value => {
    setNoOfQues(value);
  };
  const onTimeChange = value => {
    setTime(value);
  };

  const startQuizHandler = () => {
    dispatch(resetExam());
    dispatch(resetResult());
    if (sub === '') {
      return setError(true);
    }
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://opentdb.com/api.php?amount=${noOfQues}`
        );
        const allOptions = data.results.map((el, i) =>
          [...el.incorrect_answers, el.correct_answer]
            .map(el => ({ val: el, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(el => el.val)
        );

        dispatch(startExam({ questions: data.results, options: allOptions }));
        navigate('/quiz', { replace: true });
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        throw error;
      }
    })();
  };
  return (
    <Container>
      <Stack component="form" maxWidth={400} sx={{ m: 'auto', mt: 4 }}>
        <Typography
          color="secondary"
          variant="body1"
          component="p"
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
              onChange={onSubChange}
            >
              <MenuItem value={0}>Agronomy</MenuItem>
              <MenuItem value={1}>Pathology</MenuItem>
              <MenuItem value={2}>Nematology</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" component="p">
            Question
          </Typography>
          <Stack direction="row" justifyContent="space-between">
            <Chip
              label="10"
              variant={noOfQues === 10 ? 'contained' : 'outlined'}
              onClick={onNoOfQuesChange.bind(this, 10)}
              sx={{ minWidth: '8rem' }}
            />
            <Chip
              label="20"
              variant={noOfQues === 20 ? 'contained' : 'outlined'}
              onClick={onNoOfQuesChange.bind(this, 20)}
              sx={{ minWidth: '8rem' }}
            />
            <Chip
              label="30"
              variant={noOfQues === 30 ? 'contained' : 'outlined'}
              onClick={onNoOfQuesChange.bind(this, 30)}
              sx={{ minWidth: '8rem' }}
            />
          </Stack>
        </Box>
        <Box sx={{ mb: 4 }}>
          <Typography variant="body2" component="p">
            Time
          </Typography>
          <Stack direction="row" justifyContent="space-between">
            <Chip
              label="10 s"
              variant={time === 10 ? 'contained' : 'outlined'}
              onClick={onTimeChange.bind(this, 10)}
              sx={{ minWidth: '8rem' }}
            />
            <Chip
              label="20 s"
              variant={time === 20 ? 'contained' : 'outlined'}
              onClick={onTimeChange.bind(this, 20)}
              sx={{ minWidth: '8rem' }}
            />
            <Chip
              label="30 s"
              variant={time === 30 ? 'contained' : 'outlined'}
              onClick={onTimeChange.bind(this, 30)}
              sx={{ minWidth: '8rem' }}
            />
          </Stack>
        </Box>
        {error && (
          <Alert severity="info" onClose={() => setError(false)}>
            Plz select subject also.
          </Alert>
        )}
        <Button
          size="small"
          variant="contained"
          sx={{ alignSelf: 'flex-start' }}
          endIcon={<PlayArrowIcon />}
          onClick={startQuizHandler}
          disabled={isLoading}
        >
          Start
        </Button>
      </Stack>
    </Container>
  );
};

export default BeforeQuiz;
