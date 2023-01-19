import { configureStore, combineReducers } from '@reduxjs/toolkit';
import questionReducer from './question-reducer';
import resultReducer from './result-reducer';
import personalDataReducer from './personal-data-reducer';
import performanceDataReducer from './performance-reducer';
import timerReducer from './timer-reducer';

const rootReducer = combineReducers({
  questions: questionReducer,
  result: resultReducer,
  personalData: personalDataReducer,
  performanceData: performanceDataReducer,
  timer: timerReducer
});

export default configureStore({ reducer: rootReducer });
