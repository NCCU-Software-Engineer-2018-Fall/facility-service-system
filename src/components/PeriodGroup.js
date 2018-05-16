import React from 'react';
import Period from './Period';
import '../styles/PeriodGroup.css'

const periods = [
  ['A', '0600~0700'],
  ['B', '0600~0700'],
  ['1', '0600~0700'],
  ['2', '0600~0700'],
  ['3', '0600~0700'],
  ['4', '0600~0700'],
  ['C', '0600~0700'],
  ['D', '0600~0700'],
  ['5', '0600~0700'],
  ['6', '0600~0700'],
  ['7', '0600~0700'],
  ['8', '0600~0700'],
  ['E', '0600~0700'],
  ['F', '0600~0700'],
  ['G', '0600~0700']
]
const periodgroup = periods.map((period, i) => <Period key={i} id={period[0]} time={period[1]} />)

const PeriodGroup = () => (
  <div className='period-group'>{periodgroup}</div>
)

export default PeriodGroup;