import { combineReducers } from 'redux';

import timeReducer from './timeReducer';
import styleReducer from './styleReducer';
import loginReducer from './loginReducer';

export default combineReducers({
  timeReducer,
  styleReducer,
  loginReducer
})