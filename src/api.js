import {serverUrl} from './config';

export function getAllClassroom() {
  return fetch(serverUrl + '/classroom/all')
    .then(res => {
      return res.json();
    })
    .catch(err => {
      console.log(err);
    });
};

export function getAppointmentByClassroom(classroomId) {
  return fetch(serverUrl + `/appointment/query/byClassroom/${classroomId}`)
    .then(res => {
      return res.json()
    })
    .catch(err => {
      console.log(err);
    });
};

export function getAllUser() {
  return fetch(serverUrl + '/user/all')
    .then(res => {
      return res.json();
    })
    .catch(err => {
      console.log(err);
    });
};

export function getAppointmentByUser(userId) {
  return fetch(serverUrl + `/appointment/query/byUser/${userId}`)
    .then(res => {
      return res.json()
    })
    .catch(err => {
      console.log(err);
    });
};

export function postAppointment(appointmentInfo) {
  console.log(JSON.stringify(appointmentInfo));
  return fetch(serverUrl + `/appointment/create`, {
    method: 'post',
    body: JSON.stringify(appointmentInfo),
    headers: {
      'content-type': 'application/json',
    }
  })
}

export function getBatchByUser(userId) {
  return fetch(serverUrl + `/batch/query/byUserId/${userId}`)
    .then(res => {
      return res.json()
    })
    .catch(err => {
      console.log(err);
    });
};

export function getAppointmentByBatch(batchId) {
  return fetch(serverUrl + `/appointment/query/byBatch/${batchId}`)
    .then(res => {
      return res.json()
    })
    .catch(err => {
      console.log(err);
    });
};