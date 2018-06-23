const classroomReducer = (state = {
  classroom: [],
  selectedClassroom: null
}, action) => {
  switch (action.type) {
    case 'RECORD_ALL_CLASSROOM':
      state = {
        ...state,
        classroom: action.payload,
      };
      break;
    case 'SELECTED_CLASSROOM':
      state = {
        ...state,
        selectedClassroom: action.payload
      };
      break;
    default:
      break;
  }
  return state;
};

export default classroomReducer;