import React from 'react';
import Hour from '../components/Hour.js'

class WeeklyCalendar extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.match.params.whichDay);
    let target = new Date(this.props.match.params.whichDay);
    this.targetDate = target.toString();
    console.log(target.toString());
  }

  render() {
    return (
      <div>
        <div>{this.targetDate}</div>
      </div>
    );
  }
}

export default WeeklyCalendar;