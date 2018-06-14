export function selectDate(date, time) {
  return {
    type: 'SELECT_DATE',
    payload: { date, time }
  }
};

export function selectBuilding(building) {
  return {
    type: 'SELECT_BUILDING',
    payload: building
  }
};

export function selectEveryWeekBox() {
  return {
    type: 'SELECT_EVERY_WEEK_BOX'
  }
};

export function setStartDate(date) {
  return {
    type: 'SET_START_DATE',
    payload: date
  }
};

export function setEndDate(date) {
return {
  type: 'SET_END_DATE',
    payload: date
  }
};

export function resetAppointment() {
  return {
    type: 'RESET_APPOINTMENT'
  }
};

export function recordClassroomAppointment(appointment) {
  return {
    type: 'RECORD_CLASSROOM_APPOINTMENT',
    payload: appointment
  }
};