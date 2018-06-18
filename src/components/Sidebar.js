import React from 'react';
import { Row, Col, Button } from 'reactstrap';

import { timeOfSymbol } from '../constant';
import '../styles/Sidebar.css';
import ChooseBorrowPeriodBlock from '../components/ChooseBorrowPeriodBlock';
import SearchClassroomButton from '../containers/SearchClassroomButton';
import SearchTimeButton from '../containers/SearchTimeButton';

const Sidebar = (props) => {
  let sidebar = null;
  let { type, selectDates, classroom, selectedClassroom } = props;
  const dateList = selectDates.map(aDate =>
    <li>
      <Row className="text-info">
        <Col md="5">{`${aDate.date.getMonth() + 1} / ${aDate.date.getDate()}`}</Col>
        <Col md="7">{`${timeOfSymbol[aDate.time]}`}</Col>
      </Row>
    </li>
  );

  let hasExistedRoomName = [];
  const classroomList = classroom.map(room => {
    let roomName = '';
    let isRepeat = false;
    let isSelected = false;
    for (let i = 0; i < room.classroom_name.length; i++) {
      if (isNaN(room.classroom_name[i]) === false)
        break;
      else
        roomName += room.classroom_name[i];
    }
    for (let i = 0; i < hasExistedRoomName.length; i++) {
      if (hasExistedRoomName[i] === roomName)
        isRepeat = true;
    }
    if (isRepeat === false) {
      hasExistedRoomName.push(roomName);
      for (let i = 0; i < props.selectedBuilding.length; i++) {
        if (props.selectedBuilding[i] === roomName)
          return (
            <Button size="sm" value={roomName}
              onClick={() => { props.selectBuilding(roomName) }}>
              {roomName}
            </Button>
          )
      }
      return (
        <Button outline size="sm" value={roomName}
          onClick={() => { props.selectBuilding(roomName) }}>
          {roomName}
        </Button>
      )
    }
  });

  const someText = (
    selectDates.length === 0 ?
      <span className="text-danger">請選擇時段!</span> : '已選擇時段'
  );

  if (type === 'time')
    sidebar = (
      <div>
        <div className="sidebar-header">
          <h5>篩選條件</h5>
        </div>
        <ul className="list-unstyled">
          <li className="sidebar-item">
            <ChooseBorrowPeriodBlock />
          </li>
          <li className="sidebar-item">選擇區域</li>
          <div className="place-button">
            {classroomList}
          </div>
          <li className="sidebar-item">{someText}
            <ul className="date-list">
              {dateList}
            </ul>
          </li>
          <li className="sidebar-item">
            <SearchClassroomButton />
          </li>
        </ul>
      </div>
    );
    
  if (type === 'room')
    sidebar = (
      <div>
        <div className="sidebar-header">
          <h5>篩選條件</h5>
        </div>
        <ul className="list-unstyled">
          <li className="sidebar-item">
            <ChooseBorrowPeriodBlock />
          </li>
          <li className="sidebar-item">{someText}
            <ul className="date-list">
              {dateList}
            </ul>
          </li>
          <li className="sidebar-item">
            <SearchTimeButton selectedClassroom={selectedClassroom} />
          </li>
        </ul>
      </div>
    );

  return (
    <div>
      {sidebar}
    </div>
  )
};

export default Sidebar;
