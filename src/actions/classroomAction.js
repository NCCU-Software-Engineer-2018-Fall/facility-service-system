export function recordAllClassroom(classroom) {
  return {
    type: 'RECORD_ALL_CLASSROOM',
    payload: classroom
  }
};

export function selectedClassroom(classroom) {
  return {
    type: 'SELECTED_CLASSROOM',
    payload: classroom
  }
};