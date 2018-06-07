import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserBlock from '../components/UserBlock';
import { getBatchByUser, getAppointmentByBatch } from '../api';

class UserBlockContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointmentInfo: []
    };
  }

  componentDidMount() {
    getBatchByUser(this.props.userId)
      .then(doc => {
        let batchArr = [];
        for (let batch of doc.data) 
          batchArr.push(batch);
        return batchArr;
      })
      .then(batchArr => {
        for(let i = 0; i<batchArr.length; i++) {
          let appointmentInfo = {};
          getAppointmentByBatch(batchArr[i].id)
            .then(doc => {
              appointmentInfo.batch = batchArr[i].title;
              appointmentInfo.appointment = doc.data;
              let newAppointmentInfo = [...this.state.appointmentInfo, appointmentInfo];
              this.setState({
                appointmentInfo: newAppointmentInfo
              });
            })
        }
      })
  }

  render() {
    return (
      <UserBlock appointmentInfo={this.state.appointmentInfo} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.loginReducer.userId
  }
}

export default connect(mapStateToProps, null)(UserBlockContainer);
