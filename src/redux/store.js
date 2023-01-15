import { configureStore, combineReducers } from '@reduxjs/toolkit';
import questionReducer from './question-reducer';
import resultReducer from './result-reducer';
import personalDataReducer from './personal-data-reducer';
import performanceDataReducer from './performance-reducer';

const rootReducer = combineReducers({
  questions: questionReducer,
  result: resultReducer,
  personalData: personalDataReducer,
  performanceData: performanceDataReducer,
});

export default configureStore({ reducer: rootReducer });
