import React from 'react';
import Period from './Period';
import '../styles/PeriodGroup.css'

const periods = [
  ['A', '0600~0700'],
  ['B', '0700~0800'],
  ['1', '0800~0900'],
  ['2', '0900~1000'],
  ['3', '1000~1100'],
  ['4', '1100~1200'],
  ['C', '1200~1300'],
  ['D', '1300~1400'],
  ['5', '1400~1500'],
  ['6', '1500~1600'],
  ['7', '1600~1700'],
  ['8', '1700~1800'],
  ['E', '1800~1900'],
  ['F', '1900~2000'],
  ['G', '2000~2100']
]
const periodgroup = periods.map((period, i) => <Period key={i} id={period[0]} time={period[1]} />)

const PeriodGroup = () => (
  <div className='period-group'>{periodgroup}</div>
)

export default PeriodGroup;