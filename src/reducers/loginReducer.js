const loginReducer = (
  state = {
    studentId: '',
    isLogin: false
  },action
) => {
  switch (action.type) {
    case 'SET_LOGIN':
      let studentId = action.studentId
      let isLogin = action.isLogin

      return {
        studentId: studentId,
        isLogin: isLogin
      }
  
    default:
      return state
  }
}

export default loginReducer;