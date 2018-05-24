import React, { Component } from 'react';
import { connect } from 'react-redux';

import WeekCalendar from '../components/WeekCalendar';
import { setWeek } from '../actions/timeActions';

class WeeklyCalendarContainer extends Component {
  render() {
    let { year, month, date, weekFirstDate } = this.props;
    
    if (year == undefined) {
      let now = new Date();
      now.setDate(now.getDate() - now.getDay());
      if (weekFirstDate.getFullYear() != now.getFullYear() ||
        weekFirstDate.getMonth() != now.getMonth() ||
        weekFirstDate.getDate() != now.getDate()) {
        this.props.setWeek(now.getFullYear(), now.getMonth(), now.getDate());
      }
    }
    else if (year != undefined) {
      let newDate = new Date(year, month - 1, date);
      newDate.setDate(newDate.getDate() - newDate.getDay());
      if (weekFirstDate.getTime() != newDate.getTime()) {
        this.props.setWeek(newDate.getFullYear(), newDate.getMonth(), newDate.getDate());
      }
    }
    return (
      <div className="room-weekcalendar">
        <WeekCalendar weekFirstDate={weekFirstDate} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weekFirstDate: state.timeReducer.weekFirstDate
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setWeek: (year, month, date) => {
      dispatch(setWeek(year, month, date));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyCalendarContainer);
