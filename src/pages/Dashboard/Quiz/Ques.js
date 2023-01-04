import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { decode } from 'html-entities';
import { pushAnswer, updateAnswer } from '../../../redux/result-reducer';
import { colors } from '../../../constants/colors';

const Ques = () => {
  const [checked, setChecked] = useState('');
  const { questions, trace, options } = useSelector(state => state.questions);
  const { answers } = useSelector(state => state.result);

  const dispatch = useDispatch();

  const optionCheckHandler = event => {
    const value = event.target.value;
    setChecked(value);
    if (answers[trace]) {
      return dispatch(updateAnswer({ ans: value, trace: trace }));
    }
    dispatch(pushAnswer(value));
  };

  return (
    <Box>
      <Box>
        <Typography sx={{ mt: 4, mb: 2 }}>
          {decode(questions[trace]?.question)}
        </Typography>
      </Box>
      <RadioGroup value={checked} onChange={optionCheckHandler}>
        <Grid2 container spacing={2}>
          {options.length > 0 &&
            options[trace]?.map((el, i) => (
              <Grid2 item xs={12} md={6}>
                <FormControlLabel
                  sx={{
                    border: 1,
                    borderColor: colors.primary,
                    borderRadius: 1,
                    display: 'block',
                    m: 0,
                  }}
                  key={i}
                  value={el}
                  control={<Radio sx={{ boxSizing: 'border-box' }} />}
                  label={decode(el)}
                  checked={el === answers[trace]}
                />
              </Grid2>
            ))}
        </Grid2>
      </RadioGroup>
    </Box>
  );
};

export default Ques;
