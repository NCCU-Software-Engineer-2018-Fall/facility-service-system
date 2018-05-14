import React from 'react';
import '../styles/Week.css'

const Week = (props) => (
  <div className="week">
    <div>周{props.weekday}</div>
    <div className="week-date">{props.day}</div>
  </div>
)

export default Week;