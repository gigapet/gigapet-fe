import React, { Component } from 'react';
import Week from './Week';
import moment from 'moment';
import DayNames from './DayNames';
import styled from 'styled-components';


const MonthLabelContainer = styled.div`
  display:flex;
  justify-content:center;
`;
const Arrows = styled.i`
  font-size: 4rem;
  margin: auto 0;
  padding: 0rem 3rem;
`;

const MonthLabel = styled.h1`
  margin: 0 auto 2rem;
  font-size: 5rem;
`;
export class WeekView extends Component {
    constructor(props) {
        super(props);
        this.state = {
          week: moment(),
          selected: moment().startOf('day')
        }
    }

    previous = () => {
      const { week } = this.state;
    
      this.setState({
        week: week.subtract(1, 'week'),
      });
    }
    
    next = () => {
      const { week } = this.state;
    
      this.setState({
        week: week.add(1,'week'),
      });
    }
    renderWeekLabel() {
      const { week } = this.state;
    
      return <span className="week-label">{week.startOf('week').format("MMMM Do")} - {week.endOf('week').format("MMMM Do YYYY")}</span>;
    }
  render() {
    const { selected, week } = this.state;
    let date = this.state.week.clone().startOf("week").add("d" -1).day("Sunday");
    
    return (
      <div>
        <MonthLabelContainer>
        <Arrows className="arrow fa fa-angle-left" onClick={this.previous}/>
          <MonthLabel>{this.renderWeekLabel()}</MonthLabel>
        <Arrows className="arrow fa fa-angle-right" onClick={this.next}/>
        </MonthLabelContainer>
        <DayNames />
        <Week key={date} 
        date={date.clone()} 
        week={week} 
        selected={selected}/>
      </div>
    )
  }
}

export default WeekView
