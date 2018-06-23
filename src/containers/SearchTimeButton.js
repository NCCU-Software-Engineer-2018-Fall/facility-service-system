import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import swal from 'sweetalert2';

import { formatDateNumber } from '../util';
import { idOfSymbol } from '../constant';
import { postAppointment } from '../api';
import { resetAppointment } from '../actions/appointmentActions';

class SearchTimeButton extends React.Component {
  constructor (props) {
    super(props)
    // let selectDates = this.props.selectDates
    this.state ={
      bookdate: []
    }
  }

  reset() {
    this.setState({
      selectDates: [],
      bookdate: []
    })
  }

  findAllBookDate = (selectedDate, startDate, endDate) => {
    let allBookDate = [...selectedDate];
    let _startDate = new Date(startDate.split('-')[0], Number(startDate.split('-')[1]) - 1, startDate.split('-')[2]);
    let _endDate = new Date(endDate.split('-')[0], Number(endDate.split('-')[1]) - 1, endDate.split('-')[2]);
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
  
  searchTime = (selectedDate, option) => {
    let bookdate = selectedDate
    if (option.isBorrowEveryWeek && option.borrowStartDate && option.borrowEndDate) {
      bookdate = this.findAllBookDate(selectedDate, option.borrowStartDate, option.borrowEndDate)
      this.setState({
        bookdate
      })
    }
    return bookdate
  }

  handleClick(selectedDate, option) {
    let bookdate = this.searchTime(selectedDate, option)
    
    let availableClassroom = `
      <div class="pop-up-content">
        <p class="pop-up-content-left">用途：</p>
        <div class="form-group">
          <input type="text" class="form-control" id="appointment-title" placeholder="寫點什麼..."/></div>
          <p class="pop-up-content-left">借用教室：</p>
          <p class="pop-up-content-left">${this.props.selectedClassroom.classroom_name}</p>
        </div>
        <div class="pop-up-content">
        <p class="pop-up-content-left">預訂時間：</p>
          <ul class="pop-up-content-left">
      `
    for (let selectedPeriod of bookdate) {
      let date = `${selectedPeriod.date.getFullYear()}-${selectedPeriod.date.getMonth() + 1}-${selectedPeriod.date.getDate()}`;
      let period = selectedPeriod.time
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
    availableClassroom += '</ul></div></div>'

    //popup modal
    swal.mixin({
      confirmButtonClass: 'btn btn-success swal-bootstrap-button',
      cancelButtonClass: 'btn btn-danger swal-bootstrap-button',
      buttonsStyling: false,
    })({
      title: '確認借用',
      html: availableClassroom,
      showCancelButton: true,
      confirmButtonText: '確認送出',
      cancelButtonText: '取消借用',
      reverseButtons: true,
      allowOutsideClick: false,
      showLoaderOnConfirm: true,
      preConfirm: () => {
        let time = [];
        for (let aDate of bookdate) {
          let timeSlot = {
            date: `${aDate.date.getFullYear()}-${formatDateNumber(aDate.date.getMonth() + 1)}-${formatDateNumber(aDate.date.getDate())}`,
            period_id: idOfSymbol[aDate.time]
          }
          time.push(timeSlot);
        }

        const data = {
          user_id: this.props.userId,
          classroom_id: this.props.selectedClassroom.id,
          title: document.getElementById('appointment-title').value,
          time: time
        }
        console.log(data);
        return postAppointment(data);
      }
    }).then(result => {
      this.props.resetAppointment();
      this.reset()
      console.log('reset');
      if (result.value) {
        swal({
          type: 'success',
          title: '教室已預借完成！',
          allowOutsideClick: false
        });
      }
    })
  }
  
  render () {
    if (this.props.selectedDate.length !== 0) {    
      return (
        <Button color="primary" onClick={() => {
          this.handleClick(this.props.selectedDate, {
            isBorrowEveryWeek: this.props.isBorrowEveryWeek,
            borrowStartDate: this.props.borrowStartDate,
            borrowEndDate: this.props.borrowEndDate
          })
        }} >
        確認借用
        </Button>
      )
    }else
      return null
  }
}

const mapStateToProps = (state) => {
  return{
    selectedDate: state.appointmentReducer.selectDates,
    userId: state.loginReducer.userId,
    isBorrowEveryWeek: state.appointmentReducer.isBorrowEveryWeek,
    borrowStartDate: state.appointmentReducer.borrowStartDate,
    borrowEndDate: state.appointmentReducer.borrowEndDate,

  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    resetAppointment: () => {
      dispatch(resetAppointment());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchTimeButton);