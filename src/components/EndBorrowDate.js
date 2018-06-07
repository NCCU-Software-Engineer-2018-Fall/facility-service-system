import React from 'react';
import { Row, Col, Input, Label } from 'reactstrap';

const EndBorrowDate = (props) => (
  <Row className="form-group">
    <Label className="col-md-2">末</Label>
    <Col md="10">
      <Input className="date-input" type="date"
        value={props.borrowEndDate}
        onChange={(event) => { props.setEndDate(event.target.value) }} />
    </Col>
  </Row>
);

export default EndBorrowDate;