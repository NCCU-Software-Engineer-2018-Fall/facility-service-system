import React from 'react';

import IsBorrowEveryWeekCheckBox from '../containers/IsBorrowEveryWeekCheckBox';
import BorrowPeriod from '../containers/BorrowPeriod';

const ChooseBorrowPeriodBlock = () => (
  <div>
    <IsBorrowEveryWeekCheckBox />
    <BorrowPeriod />
  </div>
);

export default ChooseBorrowPeriodBlock;
