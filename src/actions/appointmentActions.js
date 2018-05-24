export function selectDate(date, time) {
  return {
    type: 'SELECT_DATE',
    payload: { date, time }
  }
};

export function borrowEveryWeek(startDate, endDate) {
  return {
    type: 'BORROW_EVERY_WEEK',
    payload: { start: startDate, end: endDate }
  }
}