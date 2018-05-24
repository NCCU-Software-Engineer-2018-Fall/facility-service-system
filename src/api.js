import {serverUrl} from './config';

export function getAllClassroom() {
  console.log('GET all Classrooms');
  return fetch(serverUrl + '/classroom/all')
    .then(res => {
      return res.json();
    })
    .then(body => {
      return body;
      console.log('END');
    })
    .catch(err => {
      console.log(err);
    });
};

export function getAllPeriod() {
  console.log('GET all Periods');
  return fetch(serverUrl + '/period/all')
    .then(res => { 
      return res.json()
    })
    .then(body => {
      return body;
      console.log('END');
    })
    .catch(err => {
      console.log(err);
    });
}
