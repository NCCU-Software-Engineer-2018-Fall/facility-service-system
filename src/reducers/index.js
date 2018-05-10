import { combineReducers } from 'redux';

import timeReducer from './timeReducer';
import styleReducer from './styleReducer';

export default combineReducers({
  timeReducer,
  styleReducer
})