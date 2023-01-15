import { Box, Button, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DashboardBg from '../../../components/DashboardBg';

import { nextQues, prevQues } from '../../../redux/question-reducer';
import { pushAnswer } from '../../../redux/result-reducer';
import Ques from './Ques';

const Quiz = () => {
  const { questions, time, trace } = useSelector(state => state.questions);
  const { answers } = useSelector(state => state.result);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nextQuesHandler = () => {
    if (!answers[trace]) {
      dispatch(pushAnswer('undefined'));
    }
    if (questions.length <= trace + 1) {
      
      navigate('/report', { replace: true });

      return;
    }
    dispatch(nextQues());
  };

  return (
    <DashboardBg>
      <Stack
        sx={{
          minHeight: { xs: window.innerHeight, md: '100vh' },
          py: { md: 8 },
        }}
        alignItems="center"
      >
        <Stack
          sx={{
            flex: 1,
            width: '100%',
            maxWidth: '100rem',
            borderRadius: 5,
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(2.2rem)',
            px: { md: 8, xs: 2 },
            py: 4,
            overflow: 'hidden',
          }}
          justifyContent="space-between"
        >
          <Box>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                position: 'sticky',
                top: 0,
                p: 1,
                background: 'rgba(255, 255, 255, 0.2)',
              }}
            >
              <Typography variant="body2" component="p">
                Question:
                {questions.length > 0 && (
                  <Typography variant="body2" component="span">
                    {trace + 1}/{questions.length}
                  </Typography>
                )}
              </Typography>
              <Typography variant="body2" component="p">
                Time:
                {time !== null && (
                  <Typography variant="body2" component="span">
                    10 minuts
                  </Typography>
                )}
              </Typography>
            </Stack>
            <Ques />
          </Box>

          <Stack sx={{ mt: 4 }} direction="row" justifyContent="space-between">
            {trace > 0 && (
              <Button
                disableElevation
                disableRipple
                variant="contained"
                size="small"
                onClick={() => dispatch(prevQues())}
              >
                Previous
              </Button>
            )}

            <Button
              sx={{ marginLeft: 'auto' }}
              disableElevation
              disableRipple
              variant="contained"
              size="small"
              onClick={nextQuesHandler}
            >
              {questions.length > trace + 1 ? 'Next' : 'Submit'}
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </DashboardBg>
  );
};

export default Quiz;
