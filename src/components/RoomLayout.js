import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import WeeklyCalendarContainer from '../containers/WeeklyCalendarContainer';
import BasedOnTimeSidebar from '../containers/BasedOnTimeSidebar';


const RoomLayout = ({ match }) => {
  let calendar = null
  calendar = <WeeklyCalendarContainer />
  console.log(match.params.building, match.params.room);

  return (
    <Container fluid>
      <Row>
        <Col md="2" className="sidebar">
          <BasedOnTimeSidebar />
        </Col>
        <Col md="10" className="special-col">
          {calendar}
        </Col>
      </Row>
    </Container>
  )
}

export default RoomLayout;