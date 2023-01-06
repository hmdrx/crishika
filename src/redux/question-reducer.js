import { createSlice } from '@reduxjs/toolkit';

export const questionReducer = createSlice({
  name: 'questions',
  initialState: {
    questions: [],
    options: [],
    correct_answers: [],
    trace: 0,
    time: null,
  },
  reducers: {
    startExam: (state, action) => {
      return {
        ...state,
        questions: action.payload.questions,
        options: action.payload.options
      };
    },
    nextQues: state => {
      return {
        ...state,
        trace: state.trace + 1,
      };
    },
    prevQues: state => {
      return {
        ...state,
        trace: state.trace - 1,
      };
    },
    options: (state, action) => {
      return {
        ...state,
        options: action.payload,
      };
    },
    resetExam: (state) => {
      return {
        questions: [],
        options: [],
        correct_answers: [],
        trace: 0,
        time: null,
      };
    },
  },
});

export const { startExam, nextQues, prevQues, resetExam } =
  questionReducer.actions;

export default questionReducer.reducer;
