import { combineReducers } from 'redux';

import timeReducer from './timeReducer';
import styleReducer from './styleReducer';
import appointmentReducer from './appointmentReducer';
import classroomReducer from './classroomReducer';
import preriodReducer from './preriodReducer';
import loginReducer from './loginReducer';

export default combineReducers({
  timeReducer,
  styleReducer,
  appointmentReducer,
  classroomReducer,
  preriodReducer,
  loginReducer
})