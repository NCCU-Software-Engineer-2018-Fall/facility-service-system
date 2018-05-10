export function shiftForwardFirstDate(date) {
  return {
    type: 'SHIFT_FORWARD_FIRST_DATE',
    payload: date
  };
}

export function shiftBackFirstDate(date) {
  return {
    type: 'SHIFT_BACK_FIRST_DATE',
    payload: date
  }
}