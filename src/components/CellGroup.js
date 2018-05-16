import React from 'react';
import CellColumn from './CellColumn';
import '../styles/CellGroup.css'

const weeks = [
  {
    month: '5',
    day: '1',
    weekday: '一'
  },
  {
    month: '5',
    day: '1',
    weekday: '二'
  },
  {
    month: '5',
    day: '1',
    weekday: '三'
  },
  {
    month: '5',
    day: '1',
    weekday: '四'
  },
  {
    month: '5',
    day: '1',
    weekday: '五'
  },
  {
    month: '5',
    day: '1',
    weekday: '六'
  },
  {
    month: '5',
    day: '1',
    weekday: '日'
  },
]
const weekgroup = weeks.map((week, i) => <CellColumn key={i} />)

const CellGroup = () => (
  <div className='cell-group'>{weekgroup}</div>
)

export default CellGroup;