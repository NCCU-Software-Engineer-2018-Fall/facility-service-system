import React from 'react';
import Cell from './Cell';
import '../styles/CellColumn.css'

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

const cells = periods.map((period, i) => <Cell key={i} />)

const CellColumn = () => (
  <div className='cell-column'>
    {cells}
  </div>
)

export default CellColumn;