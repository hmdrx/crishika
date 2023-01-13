import { configureStore, combineReducers } from '@reduxjs/toolkit';
import questionReducer from './question-reducer';
import resultReducer from './result-reducer';
import personalDataReducer from './personal-data-reducer';

const rootReducer = combineReducers({
  questions: questionReducer,
  result: resultReducer,
  personalData: personalDataReducer
});

export default configureStore({ reducer: rootReducer });
