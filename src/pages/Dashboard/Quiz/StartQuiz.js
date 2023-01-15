import {
  Alert,
  Button,
  Chip,
  CircularProgress,
  Stack,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { startExam, resetExam } from '../../../redux/question-reducer';
import { resetResult } from '../../../redux/result-reducer';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 180,
  },
});

const BeforeQuiz = () => {
  const [sub, setSub] = useState('');
  const [cat, setCat] = useState();
  const [noOfQues, setNoOfQues] = useState(5);
  const [time, setTime] = useState(20);
  const [error, setError] = useState({ errorStatus: false, msg: '' });
  const [isLoading, setIsLoading] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('https://opentdb.com/api_category.php');
        setCat(res.data.trivia_categories);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

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
      return setError({ errorStatus: true, msg: 'Plz select subject also.' });
    }
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://opentdb.com/api.php?amount=${noOfQues}&category=${sub}`
        );
        const allOptions = data.results.map((el, i) =>
          [...el.incorrect_answers, el.correct_answer]
            .map(el => ({ val: el, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(el => el.val)
        );

        const subjectName = cat.find(el => el.id === sub);
        
        dispatch(
          startExam({
            id: subjectName.id,
            sub: subjectName.name,
            questions: data.results,
            options: allOptions,
          })
        );
        navigate('/quiz', { replace: true });
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError({ errorStatus: true, msg: error.message });
      }
    })();
  };
  return (
    <Stack sx={{ mt: 2 }} alignItems="center">
      <Box>
        <Box sx={{ minWidth: { sm: 460, xs: '90vmin' }, mb: 6 }}>
          <Typography
            sx={{ bgcolor: '#25BF7744', p: 1, mb: 2, borderRadius: 2 }}
            variant="body2"
          >
            Subject
          </Typography>

          <FormControl fullWidth size="small">
            <Select value={sub} onChange={onSubChange} displayEmpty>
              <MenuItem value="">----Choose----</MenuItem>
              {cat &&
                cat.map(el => (
                  <MenuItem key={el.id} value={el.id}>
                    {el.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ mb: 6 }}>
          <Stack
            direction="row"
            sx={{ bgcolor: '#25BF7744', p: 1, mb: 2, borderRadius: 2 }}
          >
            <Typography sx={{ mr: 1 }} variant="body2">
              Question
            </Typography>
            <CustomWidthTooltip
              title="Number of Questions want to attempt"
              placement="right"
              arrow
            >
              <InfoIcon sx={{ color: 'gray' }} fontSize="small" />
            </CustomWidthTooltip>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Chip
              label="5"
              variant={noOfQues === 5 ? 'contained' : 'outlined'}
              onClick={onNoOfQuesChange.bind(this, 5)}
              sx={{ minWidth: '8rem' }}
            />
            <Chip
              label="15"
              variant={noOfQues === 15 ? 'contained' : 'outlined'}
              onClick={onNoOfQuesChange.bind(this, 15)}
              sx={{ minWidth: '8rem' }}
            />
            <Chip
              label="12"
              variant={noOfQues === 12 ? 'contained' : 'outlined'}
              onClick={onNoOfQuesChange.bind(this, 12)}
              sx={{ minWidth: '8rem' }}
            />
          </Stack>
        </Box>
        <Box sx={{ mb: 6 }}>
          <Stack
            direction="row"
            sx={{ bgcolor: '#25BF7744', p: 1, mb: 2, borderRadius: 2 }}
          >
            <Typography sx={{ mr: 1 }} variant="body2">
              Time
            </Typography>
            <CustomWidthTooltip
              title="Time need per Question in second"
              placement="right"
              arrow
            >
              <InfoIcon sx={{ color: 'gray' }} fontSize="small" />
            </CustomWidthTooltip>
          </Stack>

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
        {error.errorStatus && (
          <Alert severity="info" onClose={() => setError(false)}>
            {error.msg}
          </Alert>
        )}

        {isLoading && <CircularProgress />}

        <Button
          size="small"
          variant="contained"
          sx={{ alignSelf: 'flex-start' }}
          endIcon={<PlayArrowIcon />}
          onClick={startQuizHandler}
          disabled={isLoading}
          disableElevation
        >
          Start
        </Button>
      </Box>
    </Stack>
  );
};

export default BeforeQuiz;
