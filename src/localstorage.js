export const loadState = () => {
  const loginState = localStorage.getItem('loginState') || ''
  if (loginState) {
    const studentId = JSON.parse(loginState).studentId
    const isLogin = JSON.parse(loginState).isLogin
    return {
      studentId,
      isLogin
    }
  }else {
    return undefined
  }
}

export const saveState = (state) => {
  localStorage.setItem('loginState', JSON.stringify(state))
}