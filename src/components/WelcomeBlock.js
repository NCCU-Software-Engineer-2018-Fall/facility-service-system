import React from 'react';
import {Row, Col} from 'reactstrap';
import { Button } from 'reactstrap';
import './WelcomeBlock.css';

const WelcomeBlock = () => (
  <div>
    <Row className="justify-content-center welcome-text">
      <Col md="9">
        <h2>歡迎來到場地租借系統！</h2>
        <h2>請選擇你想要的功能</h2>
      </Col>
    </Row>
    <Row className="justify-content-center welcome-buttons">
      <Col md="3">
        <Button className="welcome-button">租借場地：<br></br>依教室查詢</Button>
      </Col>
      <Col md="3">
        <Button className="welcome-button">租借場地：<br></br>依時間查詢</Button>
      </Col>
      <Col md="3">
        <Button className="welcome-button">查看我的借用清單</Button>
      </Col>
    </Row>
  </div>
);

export default WelcomeBlock;
