import React from 'react';
import {Container, Row, Col} from 'reactstrap';

import '../styles/Time.css';
import BasedOnRoomSidebar from './BasedOnRoomSidebar';
import EmptyMonthlyCalendar from './EmptyMonthlyCalendar';

const Time = () => {
  return (
    <Container fluid>
      <Row>
        <Col md="2" className="sidebar">
          <BasedOnRoomSidebar />
        </Col>
        <Col md="10">
          <EmptyMonthlyCalendar />
        </Col>
      </Row>
    </Container>
  )
};

export default Time;
