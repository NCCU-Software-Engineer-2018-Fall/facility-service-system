import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sidebar from '../components/Sidebar';
import { getAppointmentByClassroom } from '../api';
import { recordClassroomAppointment } from '../actions/appointmentActions';

class BasedOnRoomSidebar extends Component {
  componentWillMount() {
    const matchClassroom = this.props.classroom.filter(classroom => classroom.classroom_name == this.props.room)

    Promise.resolve(getAppointmentByClassroom(matchClassroom[0].id))
      .then(doc => {
        this.props.recordClassroomAppointment(doc.data)
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
    recordClassroomAppointment: (appointment) => {
      dispatch(recordClassroomAppointment(appointment))
    }  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasedOnRoomSidebar);
