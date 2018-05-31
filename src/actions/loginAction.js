export function setLogin(studentId, isLogin) {
  return {
    type: 'SET_LOGIN',
    studentId,
    isLogin
  }
}

export function initLogin() {
  return {
    type: 'INIT_LOGIN'
  }
}