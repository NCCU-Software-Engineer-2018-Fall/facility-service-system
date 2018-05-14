import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import BasedOnRoomSidebar from './BasedOnRoomSidebar';
import EmptyMonthlyCalendar from './EmptyMonthlyCalendar';
import WeekCalendar from '../components/WeekCalendar';

import '../styles/Room.css'

const Room = () => {
  return (
    <Container fluid>
      <Row>
        <Col md="2" className="sidebar">
          <BasedOnRoomSidebar />
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
