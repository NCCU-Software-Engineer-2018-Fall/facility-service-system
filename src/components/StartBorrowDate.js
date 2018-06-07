import React from 'react';
import { Row, Col, Input, Label } from 'reactstrap';

const StartBorrowDate = (props) => (
  <Row className="form-group">
    <Label className="col-md-2">始</Label>
    <Col md="10">
      <Input className="date-input" type="date"
        value={props.borrowStartDate}
        onChange={(event) => { props.setStartDate(event.target.value) }} />
    </Col>
  </Row>
);

export default StartBorrowDate;
