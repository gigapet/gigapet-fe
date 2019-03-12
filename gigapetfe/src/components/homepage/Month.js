import React, { Component } from 'react';
import moment from 'moment';
import DayNames from './DayNames';
import Week from './Week';

import styled from 'styled-components';

const CalendarGeneral = styled.div`
  background: midnightblue;
  color:white;
  height: 100vh;
  padding:1rem;
  overflow: hidden;
`;

const MonthLabelContainer = styled.div`
  display:flex;
  justify-content:center;
`;
const MonthLabel = styled.h1`
  margin: 0 auto 2rem;
  font-size: 7rem;

`;

const Arrows = styled.i`
  font-size: 4rem;
  margin: auto 0;
  padding: 0rem 3rem;
`;

export class Month extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      month: moment(),
      selected: moment().startOf('day')
    };
}

previous = () => {
  const {
    month,
  } = this.state;

  this.setState({
    month: month.subtract(1, 'month'),
  });
}

next = () => {
  const {
    month,
  } = this.state;

  this.setState({
    month: month.add(1,'month'),
  });
}

select(day) {
  this.setState({
    selected: day.date,
    month: day.date.clone(),
  });
}

renderWeeks() {
  let weeks = [];
  let done = false;
  let date = this.state.month.clone().startOf("month").add("w" -1).day("Sunday");
  let count = 0;
  let monthIndex = date.month();

  const {
    selected,
    month,
  } = this.state;

  while (!done) {
    weeks.push(
      <Week key={date} 
        date={date.clone()} 
        month={month} 
        select={(day)=>this.select(day)} 
        selected={selected} />
    );

    date.add(1, "w");
    
    done = count++ > 2 && monthIndex !== date.month();
    monthIndex = date.month();
  }

  return weeks;
};

renderMonthLabel() {
  const {
    month,
  } = this.state;

  return <span className="month-label">{month.format("MMMM YYYY")}</span>;
}
render() {
  return (
    <CalendarGeneral>
      <header>
        <MonthLabelContainer>
          <Arrows className="arrow fa fa-angle-left" onClick={this.previous}/>
          <MonthLabel>{this.renderMonthLabel()}</MonthLabel>
          <Arrows className="arrow fa fa-angle-right" onClick={this.next}/>
        </MonthLabelContainer>
        <DayNames />
      </header>
      {this.renderWeeks()}
    </CalendarGeneral>
  );
}
}

export default Month;