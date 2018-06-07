import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import swal from 'sweetalert2';

import '../styles/SearchClassroomButton.css';
import { getAppointmentByClassroom, postAppointment } from '../api';
import { symbolOfTime, timeOfSymbol, idOfSymbol } from '../constant';
import { formatDateNumber } from '../util';
import { resetAppointment } from '../actions/appointmentActions';

class SearchClassroomButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredClassroom: [],
      bookDate: [],
      selectedClassroom: '',
      selectedClassroomId: ''
    };
  }

  selectClassroom = (classroomId, classroomName) => {
    this.setState({
      selectedClassroomId: classroomId,
      selectedClassroom: classroomName
    });
  }

  reset = () => {
    this.setState({
      selectedClassroomId: '',
      selectedClassroom: ''
    });
  }

  findAllBookDate = (selectedDate, startDate, endDate) => {
    let allBookDate = [...selectedDate];
    let _startDate = new Date(startDate.split('-')[0], Number(startDate.split('-')[1]) - 1, startDate.split('-')[2]);
    let _endDate = new Date(endDate.split('-')[0], Number(endDate.split('-')[1]) - 1, endDate.split('-')[2]);
    console.log(_endDate);
    for (let i = 0; i < selectedDate.length; i++) {
      let time = selectedDate[i].time;
      let changedDate = new Date(selectedDate[i].date.getTime());
      while (changedDate.setDate(changedDate.getDate() - 7) >= _startDate.getTime())
        allBookDate.push({ date: new Date(changedDate.getTime()), time });
      changedDate = new Date(selectedDate[i].date.getTime());
      while (changedDate.setDate(changedDate.getDate() + 7) <= _endDate.getTime())
        allBookDate.push({ date: new Date(changedDate.getTime()), time });
    }
    return allBookDate;
  }

  filterClassroomByBuilding = (classroom, selectedBuilding) => {
    let filteredClassroom = [];
    for (let i = 0; i < classroom.length; i++) {
      let requirePutIn = false;
      for (let j = 0; j < selectedBuilding.length; j++) {
        if (classroom[i].building === selectedBuilding[j]) {
          requirePutIn = true;
          break;
        }
      }
      if (requirePutIn)
        filteredClassroom.push(classroom[i]);
    }
    return filteredClassroom;
  }

  filterClassroomByTime = (classroom, bookDate) => {
    return new Promise((resolve, reject) => {
      if (classroom.length === 0)
        resolve(classroom);
      let filteredClassroom = [];
      let response = 0;
      for (let i = 0; i < classroom.length; i++) {
        getAppointmentByClassroom(classroom[i].id)
          .then(doc => {
            let canBeBooked = true;
            for (let j = 0; j < doc.data.length; j++) {
              if (!canBeBooked)
                break;
              for (let k = 0; k < bookDate.length; k++) {
                if (doc.data[j].reserved_date === `${bookDate[k].date.getFullYear()}-${formatDateNumber(bookDate[k].date.getMonth() + 1)}-${formatDateNumber(bookDate[k].date.getDate())}` &&
                  symbolOfTime[doc.data[j].period_name] === bookDate[k].time) {
                  canBeBooked = false;
                  break;
                }
              }
            }
            return canBeBooked;
          })
          .then(canBeBooked => {
            response++;
            if (canBeBooked)
              filteredClassroom.push(classroom[i]);
            if (response === classroom.length)
              resolve(filteredClassroom);
          });
      }
    });
  }

  searchClassroom = (classroom, selectedDate, options) => {
    return new Promise((resolve, reject) => {
      let filteredClassroom = classroom;
      if (options.selectedBuilding)
        filteredClassroom = this.filterClassroomByBuilding(classroom, options.selectedBuilding);
      let bookDate = selectedDate;
      if (options.isBorrowEveryWeek && options.borrowStartDate && options.borrowEndDate)
        bookDate = this.findAllBookDate(selectedDate, options.borrowStartDate, options.borrowEndDate);

      this.filterClassroomByTime(filteredClassroom, bookDate)
        .then(filteredClassroom => {
          this.setState({
            filteredClassroom,
            bookDate
          });
        })
        .then(() => {
          resolve();
        });
    });
  }
  test = () => {
    console.log('123');
  }
  handleClick = (classroom, selectedDate, options) => {
    let self = this;
    this.searchClassroom(classroom, selectedDate, options)
      .then(() => {
        let availableClassroom = '<div class="pop-up-content">';
        if (this.state.filteredClassroom.length !== 0) {
          availableClassroom += `<p class="pop-up-content-left">用途：</p><div class="form-group"><input type="text" class="form-control" id="appointment-title" placeholder="寫點什麼..."/></div>
            <p class="pop-up-content-left">可借用教室：</p><div class="row available-classroom-list">`
          for (let room of this.state.filteredClassroom) {
            if (room.classroom_name === this.state.selectedClassroom)
              availableClassroom += `<div class="col-md-4"><button type="button" class="btn btn-info available-classroom" id=${room.classroom_name}>
            ${room.classroom_name}
            </button></div>`;
            else
              availableClassroom += `<div class="col-md-4"><button type="button" class="btn btn-outline-info available-classroom" id=${room.classroom_name}>
            ${room.classroom_name}
            </button></div>`;
          }
          availableClassroom += '</div>';
          availableClassroom += '<div class="pop-up-content">';
          availableClassroom += '<p class="pop-up-content-left">預訂時間：</p><ul class="pop-up-content-left">';
          for (let time of this.state.bookDate) {
            let date = `${time.date.getFullYear()}-${time.date.getMonth() + 1}-${time.date.getDate()}`;
            let period = timeOfSymbol[time.time];
            availableClassroom += `<li>
              <div class="row">
                <div class="col-4">
                  ${date}
                </div>
                <div class="col-8">
                  ${period}
                </div>
              </div>
            </li>`
          }
          availableClassroom += '</ul></div>';
          availableClassroom += '</div>';

          //popup modal
          swal.mixin({
            confirmButtonClass: 'btn btn-success swal-bootstrap-button',
            cancelButtonClass: 'btn btn-danger swal-bootstrap-button',
            buttonsStyling: false,
          })({
            title: '選擇借用教室',
            html: availableClassroom,
            showCancelButton: true,
            confirmButtonText: '確認送出',
            cancelButtonText: '取消借用',
            reverseButtons: true,
            allowOutsideClick: false,
            showLoaderOnConfirm: true,
            preConfirm: () => {
              let time = [];
              for (let aDate of this.state.bookDate) {
                let timeSlot = {
                  date: `${aDate.date.getFullYear()}-${formatDateNumber(aDate.date.getMonth() + 1)}-${formatDateNumber(aDate.date.getDate())}`,
                  period_id: idOfSymbol[aDate.time]
                }
                time.push(timeSlot);
              }

              const data = {
                user_id: this.props.userId,
                classroom_id: this.state.selectedClassroomId,
                title: document.getElementById('appointment-title').value,
                time: time
              }
              console.log(data);
              return postAppointment(data);
            }
          })
            .then(result => {
              this.props.resetAppointment();
              this.reset();
              if (result.value) {
                swal({
                  type: 'success',
                  title: '教室已預借完成！',
                  allowOutsideClick: false
                });
              }
            })
        }
        else {
          availableClassroom += '<p>抱歉，沒有符合需求的教室</p>';
          availableClassroom += '</div>';
          swal({
            title: availableClassroom,
            allowOutsideClick: false
          })
        }

        if (this.state.filteredClassroom.length !== 0) {
          for (let room of this.state.filteredClassroom) {
            document.getElementById(room.classroom_name).addEventListener('click', function () {
              self.selectClassroom(room.id, room.classroom_name);
              let element = document.getElementById(room.classroom_name);
              element.classList.toggle("btn-info");
              element.classList.toggle("btn-outline-info");
              for (let otherRoom of self.state.filteredClassroom) {
                let otherElement = document.getElementById(otherRoom.classroom_name);
                if (otherRoom.classroom_name !== room.classroom_name &&
                  otherElement.classList.contains("btn-info")) {
                  otherElement.classList.remove("btn-info");
                  otherElement.classList.add("btn-outline-info");
                }
              }
            });
          }
        }
      })
  }

  render() {
    if (this.props.selectedDate.length !== 0) {
      console.log(this.props.selectedDate);
      return (
        <Button color="primary" onClick={() => {
          this.handleClick(this.props.classroom, this.props.selectedDate,
            {
              selectedBuilding: this.props.selectedBuilding,
              isBorrowEveryWeek: this.props.isBorrowEveryWeek,
              borrowStartDate: this.props.borrowStartDate,
              borrowEndDate: this.props.borrowEndDate
            });
        }}>
          查詢教室
        </Button>
      );
    }
    else
      return null;
  }
}

const mapStateToProps = (state) => {
  return {
    selectedDate: state.appointmentReducer.selectDates,
    classroom: state.classroomReducer.classroom,
    selectedBuilding: state.appointmentReducer.selectedBuilding,
    isBorrowEveryWeek: state.appointmentReducer.isBorrowEveryWeek,
    borrowStartDate: state.appointmentReducer.borrowStartDate,
    borrowEndDate: state.appointmentReducer.borrowEndDate,
    userId: state.loginReducer.userId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetAppointment: () => {
      dispatch(resetAppointment());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchClassroomButton);
