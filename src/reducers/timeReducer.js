const timeReducer = (state = {
  firstDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
}, action) => {
  switch(action.type) {
    case 'SET_MONTH':
      let setYear = action.payload.getFullYear();
      let setMonth = action.payload.getMonth();
      state = {
        ...state,
        firstDate: new Date(setYear, setMonth, 1)
      }
      break;
    default:
      break;
  }
  return state;
};

export default timeReducer;