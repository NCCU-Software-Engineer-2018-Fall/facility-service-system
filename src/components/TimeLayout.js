import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../styles/TimeLayout.css';
import BasedOnTimeSidebar from '../containers/BasedOnTimeSidebar';
import MonthlyCalendarContainer from '../containers/MonthlyCalendarContainer';
import WeeklyCalendarContainer from '../containers/WeeklyCalendarContainer';

const TimeLayout = ({ match }) => {
  let calendar = null;
  if (match.params.type === undefined) {
    calendar = <MonthlyCalendarContainer />;
  }
  else if (match.params.type === 'month') {
    calendar = (
      <MonthlyCalendarContainer
        year={match.params.year}
        month={match.params.month}
        date={match.params.date} />
    );
  }
  else if (match.params.type === 'week') {
    calendar = (
      <WeeklyCalendarContainer
        year={match.params.year}
        month={match.params.month}
        date={match.params.date} />
    );
  }

  return (
    <Container fluid>
      <Row>
        <Col md="2" className="sidebar">
          <BasedOnTimeSidebar />
        </Col>
        <Col md="10">
          {calendar}
        </Col>
      </Row>
    </Container>
  )
};

export default TimeLayout;