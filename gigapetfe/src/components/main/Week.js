import React from 'react';
import Day from './Day';
import styled from 'styled-components';

const NumDayWeek = styled.div`
    display:flex;

`;

class Week extends React.Component {
    render() {
      let days = [];
      let {
        date,
      } = this.props;
      
      const {
        month,
        selected,
        select,
      } = this.props;
  
      for (var i = 0; i < 7; i++) {
        let day = {
            name: date.format("dd").substring(0, 1),
            number: date.date(),
            isCurrentMonth: date.month() === month.month(),
            isToday: date.isSame(new Date(), "day"),
            date: date
        };
        days.push(
          <Day day={day}
            selected={selected}
            select={select}/>
        );
  
        date = date.clone();
        date.add(1, "day");
      }
  
      return (
        <NumDayWeek className="row week" key={days[0]}>
          {days}
        </NumDayWeek>
      );
    }
  
  }

export default Week
