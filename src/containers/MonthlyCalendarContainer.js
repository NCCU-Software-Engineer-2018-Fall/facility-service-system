import React, { Component } from 'react';
import { connect } from 'react-redux';

import MonthlyCalendar from '../components/MonthlyCalendar';
import { setMonth } from '../actions/timeActions';

class MonthlyCalendarContainer extends Component {
  render() {
    let { year, month, date, firstDate } = this.props;
    console.log(firstDate);
    if(year == undefined) {
      let now = new Date();
      if (firstDate.getFullYear() != now.getFullYear() || firstDate.getMonth() != now.getMonth()) {
        this.props.setMonth(now.getFullYear(), now.getMonth(), 1);
      }
    }
    else if (year != undefined) {
      if (year != firstDate.getFullYear() || month != firstDate.getMonth() + 1) {
        this.props.setMonth(year, month - 1, date);
      }
    }
    return (
      <div>
        <MonthlyCalendar firstDate={this.props.firstDate} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    firstDate: state.timeReducer.firstDate
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMonth: (year, month, date) => {
      dispatch(setMonth(year, month, date));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthlyCalendarContainer);
