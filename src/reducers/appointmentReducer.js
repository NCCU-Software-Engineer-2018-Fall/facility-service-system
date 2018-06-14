const appointmentReducer = (state = {
  selectDates: [],
  selectedBuilding: [],
  isBorrowEveryWeek: false,
  borrowStartDate: '',
  borrowEndDate: ''
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
      if (done === false)
        newSelectDates = [...state.selectDates, action.payload];

      state = {
        ...state,
        selectDates: newSelectDates
      };
      break;
    case 'SELECT_BUILDING':
      let done2 = false;
      let newSelectedBuilding = [...state.selectedBuilding];
      for (let i = 0; i < state.selectedBuilding.length; i++) {
        if (action.payload === state.selectedBuilding[i]) {
          newSelectedBuilding.splice(i, 1);
          done2 = true;
          break;
        }
      }
      if (done2 === false)
        newSelectedBuilding = [...state.selectedBuilding, action.payload];

      state = {
        ...state,
        selectedBuilding: newSelectedBuilding
      };
      break;
    case 'SELECT_EVERY_WEEK_BOX':
      state = {
        ...state,
        isBorrowEveryWeek: !state.isBorrowEveryWeek,
      }
      break;
    case 'SET_START_DATE':
      state = {
        ...state,
        borrowStartDate: action.payload
      }
      break;
    case 'SET_END_DATE':
      state = {
        ...state,
        borrowEndDate: action.payload
      }
      break;
    case 'RESET_APPOINTMENT':
      state = {
        ...state,
        selectDates: [],
        selectedBuilding: [],
        isBorrowEveryWeek: false,
        borrowStartDate: '',
        borrowEndDate: ''
      }
      break;
    case 'RECORD_CLASSROOM_APPOINTMENT':
      state = {
        ...state,
        appointment: action.payload
      }
      break;
    default:
      break;
  }
  return state;
}

export default appointmentReducer;