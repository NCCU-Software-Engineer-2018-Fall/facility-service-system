import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sidebar from '../components/Sidebar';
import { getAllClassroom } from '../api';
import { recordAllClassroom } from '../actions/classroomAction';
import { selectBuilding, resetAppointment } from '../actions/appointmentActions';

class BasedOnTimeSidebar extends Component {
  componentWillMount() {
    this.props.resetAppointment()
    getAllClassroom()
      .then(doc => {
        this.props.recordAllClassroom(doc.data)
      });
  }

  render() {
    return (
      <div>
        <Sidebar type="time"
          selectDates={this.props.selectDates}
          classroom={this.props.classroom}
          selectedBuilding={this.props.selectedBuilding}
          selectBuilding={this.props.selectBuilding} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectDates: state.appointmentReducer.selectDates,
    classroom: state.classroomReducer.classroom,
    selectedBuilding: state.appointmentReducer.selectedBuilding
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    recordAllClassroom: (classroom) => {
      dispatch(recordAllClassroom(classroom));
    },
    selectBuilding: (building) => {
      dispatch(selectBuilding(building));
    },
    resetAppointment: () => {
      dispatch(resetAppointment());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasedOnTimeSidebar);
