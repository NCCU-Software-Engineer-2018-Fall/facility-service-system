const loginReducer = (
  state = {
    studentName: '',
    studentId: '',
    userId: '',
    isLogin: false
  },action
) => {
  switch (action.type) {
    case 'SET_LOGIN':
      let studentName = action.studentName
      let studentId = action.studentId
      let userId = action.userId
      let isLogin = action.isLogin

      return {
        studentName: studentName,
        studentId: studentId,
        userId: userId,
        isLogin: isLogin
      }
    case 'LOG_OUT':
      return {
        studentName: '',
        studentId: '',
        userId: '',
        isLogin: false
      }
    default:
      return state
  }
}

export default loginReducer;