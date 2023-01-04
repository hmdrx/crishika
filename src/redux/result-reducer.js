import { createSlice } from '@reduxjs/toolkit';

export const resultReducer = createSlice({
  name: 'result',
  initialState: {
    answers: [],
    username: '',
  },
  reducers: {
    pushAnswer: (state, action) => {
      state.answers.push(action.payload);
    },
    updateAnswer: (state, action) => {
      const { ans, trace } = action.payload;
      state.answers.fill(ans, trace, trace + 1);
    },
  },
});

export const { pushAnswer, updateAnswer } = resultReducer.actions;

export default resultReducer.reducer;
