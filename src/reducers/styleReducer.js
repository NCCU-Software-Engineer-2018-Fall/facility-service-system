const styleReducer = (state = {
  slideToRight: false,
  slideToLeft: false
}, action) => {
  switch (action.type) {
    case 'SLIDE_TO_RIGHT':
      state = {
        ...state,
        slideToRight: true
      };
      break;
    case 'SLIDE_TO_LEFT':
      state = {
        ...state,
        slideToLeft: true
      };
      break;
    case 'RESET':
      state = {
        ...state,
        slideToRight: false,
        slideToLeft: false
      }
      break;
    default:
      break;
  }
  return state;
};

export default styleReducer;