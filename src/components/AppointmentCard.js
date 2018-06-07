import React from 'react';
import {
  Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Col
} from 'reactstrap';

import '../styles/AppointmentCard.css';

const AppointmentCard = (props) => {
  let classroomName = props.appointment[0].classroom_name;
  let time = props.appointment.map((appointment) => {
    return <div>{`${appointment.reserved_date} ${appointment.period_name}`}</div>
  })

  return (
    <Col md="4">
    <Card className="appointment-card">
      <CardHeader className="appointment-card-header"></CardHeader>
      <CardBody className="appointment-card-body">
        <CardTitle>{props.title}</CardTitle>
        <CardText>
          借用教室：{classroomName}
        </CardText>
        <CardText>
          時間：{time}
        </CardText >
      </CardBody>
    </Card>
    </Col>
  )
};

export default AppointmentCard;
