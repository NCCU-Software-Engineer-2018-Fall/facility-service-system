const appointmentReducer = (state = {
  selectDates: [],
  borrowEveryWeekPeriod: {}
}, action) => {
  switch (action.type) {
    case 'SELECT_DATE':
      let newSelectDates = [...state.selectDates];
      let done = false;
      for (let i = 0; i < state.selectDates.length; i++) {
        if (action.payload.date.getTime() === state.selectDates[i].date.getTime() &&
          action.payload.time === state.selectDates[i].time) {
          newSelectDates.splice(i, 1);
          done = true;
        }
      }
      if(done === false)
        newSelectDates = [...state.selectDates, action.payload];
      
      state = {
        ...state,
        selectDates: newSelectDates
      };
      break;
    case 'BORROW_EVERY_WEEK':
      state = {
        ...state,
        borrowEveryWeekPeriod: action.payload
      };
      break;
    default:
      break;
  }
  return state;
}

export default appointmentReducer;