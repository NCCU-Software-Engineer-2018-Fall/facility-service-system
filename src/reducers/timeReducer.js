const timeReducer = (state = {
  firstDate: new Date()
}, action) => {
  switch(action.type) {
    case 'SHIFT_FORWARD_FIRST_DATE':
      let shiftForwardYear = action.payload.getFullYear();
      let shiftForwardMonth = action.payload.getMonth() + 1;
      if (shiftForwardMonth === 12) {
        shiftForwardMonth = 0;
        shiftForwardYear++;
      }
      
      const shiftForwardDate = new Date(shiftForwardYear, shiftForwardMonth, 1);

      console.log(shiftForwardDate);
      state = {
        ...state,
        firstDate: shiftForwardDate
      }
      break;
    case 'SHIFT_BACK_FIRST_DATE':
      let shiftBackYear = action.payload.getFullYear();
      let shiftBackMonth = action.payload.getMonth() - 1;
      if (shiftBackMonth === -1) {
        shiftBackMonth = 11;
        shiftBackYear--;
      }

      const shiftBackDate = new Date(shiftBackYear, shiftBackMonth, 1);

      state = {
        ...state,
        firstDate: shiftBackDate
      }
      break;
    default:
      break;
  }
  return state;
};

export default timeReducer;