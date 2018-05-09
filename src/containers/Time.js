import React from 'react';

import BasedOnRoomSidebar from './BasedOnRoomSidebar';
import EmptyMonthlyCalendar from './EmptyMonthlyCalendar';
import WeekCalendar from '../components/WeekCalendar';

const Time = () => {
  const col10Style = {
    // overFlow: 'hidden'
  }
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <BasedOnRoomSidebar />
          </div>
          <div className="col-10" style={col10Style}>
            {/* <EmptyMonthlyCalendar /> */}
            <WeekCalendar />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Time;
