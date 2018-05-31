import { loadState } from '../localstorage';

const preState = (state = {studentId: '', isLogin: false}, action) => {
  // switch (action.type) {
    // case "INIT_LOGIN":
    //   console.log();
    //   return loadState()
  
    // default:
      return state
  // }
  
}

export default preState;