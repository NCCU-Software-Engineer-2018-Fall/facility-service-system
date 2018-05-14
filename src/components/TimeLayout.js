import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../styles/TimeLayout.css';
import BasedOnRoomSidebar from '../containers/BasedOnRoomSidebar';
import EmptyMonthlyCalendar from '../containers/EmptyMonthlyCalendar';
import WeekCalendar from '../components/WeekCalendar';

const TimeLayout = ({ match }) => {
  let calendar = null;
  if (match.params.type === undefined) {
    calendar = <EmptyMonthlyCalendar />;
  } 
  else if (match.params.type === 'month') {
    calendar = (
      <EmptyMonthlyCalendar
        year={match.params.year}
        month={match.params.month}
        date={match.params.date} />
    );
  }
  else if (match.params.type === 'week') {
      calendar = (
        <WeekCalendar />
      );
  }

  return (
    <Container fluid>
      <Row>
        <Col md="2" className="sidebar">
          <BasedOnRoomSidebar />
        </Col>
        <Col md="10">
          {calendar}
        </Col>
      </Row>
    </Container>
  )
};

export default TimeLayout;