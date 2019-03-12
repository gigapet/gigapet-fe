import React from 'react'
import styled from 'styled-components';

const NumDay = styled.div`
    display:flex;
    justify-content:center;
    width:14rem;
    height:6rem;
    align-items:center;
    font-size:2rem;
    margin:0 auto;
    border: 1px solid white;
`;

class Day extends React.Component {
    render() {
      const {
        day,
        day: {
          date,
          isCurrentMonth,
          isToday,
          number
        },
        select,
        selected
      } = this.props;
  
      return (
        <NumDay 
          key={date.toString()} 
          className={"day" + (isToday ? " today" : "") + (isCurrentMonth ? "" : " different-month") + (date.isSame(selected) ? " selected" : "")} 
          onClick={()=>select(day)}>{number}</NumDay>
      );
    }
  }

export default Day
