import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import BasedOnTimeSidebar from './BasedOnTimeSidebar';
import WeekCalendar from '../components/WeekCalendar';

import '../styles/Room.css'

const Room = () => {
  return (
    <Container fluid>
      <Row>
        <Col md="2" className="sidebar">
          <BasedOnTimeSidebar />
        </Col>
        <Col md="10" className='room-weekcalendar'>
          {/* <EmptyMonthlyCalendar /> */}
          <WeekCalendar />
        </Col>
      </Row>
    </Container>

  )
};

export default Room;
