export function setMonth(year, month, date) {
  return {
    type: 'SET_MONTH',
    payload: new Date(year, month, date)
  }
}

export function setWeek(year, month, date) {
  return {
    type: 'SET_WEEK',
    payload: new Date(year, month, date)
  }
}