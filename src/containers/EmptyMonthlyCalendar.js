import React, { Component } from 'react';
import { connect } from 'react-redux';

import MonthlyCalendar from '../components/MonthlyCalendar';
import { setMonth } from '../actions/timeActions';

class EmptyMonthlyCalendar extends Component {
  render() {
    let { year, month, date, firstDate } = this.props;
    if (year != undefined) {
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

export default connect(mapStateToProps, mapDispatchToProps)(EmptyMonthlyCalendar);
