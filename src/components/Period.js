import React from 'react';
import '../styles/Period.css'

const Period = (props) => (
  <div className='period'>
    <div id="periodId">{props.id}</div>
    <div id="periodTime">{props.time}</div>
  </div>
)

export default Period;