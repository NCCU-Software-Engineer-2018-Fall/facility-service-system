const periodReducer = (state = {
  period: []
}, action) => {
  switch (action.type) {
    case 'RECORD_ALL_PERIOD':
      state = {
        ...state,
        period: action.payload
      };
      break;
    default:
      break;
  }
  return state;
};

export default periodReducer;