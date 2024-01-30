import React from 'react';
import './App.css';


class evennums extends React.Component {
  render() {
    const evennums = [];
    for (let i = 2; i <= 100; i += 2) {
      evennums.push(i);
    }
    const formattedoutput = evennums.join(" , ");
  
  return (
    <div className='component'>
      <h1 className='text'>แสดงเลขคู่ระหว่าง 1 - 100</h1>
      <p className='num'>{formattedoutput}</p>

    </div>
  )
}
}
export default evennums;

