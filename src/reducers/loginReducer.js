import { loadState } from '../localstorage';
console.log(loadState().studentId, loadState().isLogin);

const loginReducer = (
  // state = {
  //   studentId: loadState().studentId || '',
  //   isLogin: loadState().isLogin || false
  // }
  state = {
    studentId: '',
    isLogin: false
  }
  
  ,action
) => {
  switch (action.type) {
    case 'SET_LOGIN':
      let studentId = action.studentId
      let isLogin = action.isLogin

      return {
        studentId,
        isLogin
      }

    case 'INIT_LOGIN':
      console.log(loadState());
      return loadState()
  
    default:
      return state
  }
}

export default loginReducer;