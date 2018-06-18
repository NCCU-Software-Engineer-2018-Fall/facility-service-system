import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import BasedOnRoomSidebar from '../containers/BasedOnRoomSidebar';
import MonthlyCalendarContainer from '../containers/MonthlyCalendarContainer';
import WeeklyCalendarContainer from '../containers/WeeklyCalendarContainer';


const RoomLayout = ({ match }) => {
  let calendar = null
  if (match.params.type === undefined) {
    calendar = <MonthlyCalendarContainer />
  }
  else if (match.params.type === 'month'){
    calendar = <MonthlyCalendarContainer
      year={match.params.year}
      month={match.params.month}
      date={match.params.date} />
  }
  else if (match.params.type === 'week'){
    calendar = <WeeklyCalendarContainer
      year={match.params.year}
      month={match.params.month}
      date={match.params.date} />
  }

  return (
    <Container fluid>
      <Row>
        <Col md="2" className="sidebar">
          <BasedOnRoomSidebar room={match.params.room} />
        </Col>
        <Col md="10" className="special-col">
          {calendar}
        </Col>
      </Row>
    </Container>
  )
}

export default RoomLayout;