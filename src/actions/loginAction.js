export function setLogin(studentId, isLogin) {
  return {
    type: 'SET_LOGIN',
    studentId: studentId,
    isLogin: isLogin
  }
}