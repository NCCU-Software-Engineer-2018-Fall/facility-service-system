import React from 'react';

import BasedOnRoomSidebar from './BasedOnRoomSidebar';
import EmptyMonthlyCalendar from './EmptyMonthlyCalendar';
import WeekCalendar from '../components/WeekCalendar';

const Room = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <BasedOnRoomSidebar />
          </div>
          <div className="col-10">
            <EmptyMonthlyCalendar />
            {/* <WeekCalendar /> */}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Room;
