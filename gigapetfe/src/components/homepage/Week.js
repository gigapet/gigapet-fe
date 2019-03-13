import React from 'react';
import Day from './Day';
import styled from 'styled-components';

const NumDayWeek = styled.div`
    display:flex;
`;

class Week extends React.Component {
  render() {
    let days = [];
    let { date } = this.props;
      
    for (let i = 0; i <= 6; i++) {
      let day = {
          name: date.format("dd").substring(0, 1),
          number: date.date(),
          date: date
      };
      days.push(
        day
      );

      date = date.clone();
      date.add(1, "day");
    }

    return (
      <NumDayWeek> 
      {days.map(day =>(  
        <Day day={day} key={day.date}/>
      ))}
      </NumDayWeek>
    );
  }

}

export default Week