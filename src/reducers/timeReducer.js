const timeReducer = (state = {
  firstDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  weekFirstDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - new Date().getDay())
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
    case 'SET_WEEK':
      let _setYear = action.payload.getFullYear();
      let _setMonth = action.payload.getMonth();
      let _setDate = action.payload.getDate();
      let _setDay = action.payload.getDay();
      state = {
        ...state,
        weekFirstDate: new Date(_setYear, _setMonth, _setDate - _setDay)
      }
      break;
    default:
      break;
  }
  return state;
};

export default timeReducer;