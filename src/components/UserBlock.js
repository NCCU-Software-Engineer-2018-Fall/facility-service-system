import React from 'react';
import { Row } from 'reactstrap';

import AppointmentCard from './AppointmentCard';
import { getAppointmentByBatch } from '../api';

const UserBlock = (props) => {

  const appointmentCards = props.appointmentInfo.map((appointmentInfo) =>
    <AppointmentCard title={appointmentInfo.batch} appointment={appointmentInfo.appointment} />
  );

  return (
    <Row className="appointment-card-list">
      {appointmentCards}
    </Row>
  )
};

export default UserBlock;
