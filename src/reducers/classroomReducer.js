const classroomReducer = (state = {
  classroom: []
}, action) => {
  switch (action.type) {
    case 'RECORD_ALL_CLASSROOM':
      state = {
        ...state,
        classroom: action.payload,
      };
      break;
    default:
      break;
  }
  return state;
};

export default classroomReducer;