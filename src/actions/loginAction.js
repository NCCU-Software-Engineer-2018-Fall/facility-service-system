export function setLogin(studentName, studentId, userId, isLogin) {
  return {
    type: 'SET_LOGIN',
    studentName,
    studentId,
    userId,
    isLogin
  }
};

export function logOut() {
  return {
    type: 'LOG_OUT'
  }
}