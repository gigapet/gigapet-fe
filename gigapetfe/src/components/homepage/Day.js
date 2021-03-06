import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import moment from 'moment';
// import DayView from './DayView';

const NumDay = styled(NavLink)`
    display:flex;
    justify-content:center;
    width: 100%;
    height: 9vh;
    align-items:center;
    font-size: 2rem;
    margin: 0 auto;
    text-decoration: none;
    color: white;
    border: 1px solid black;
    :hover {
      background: darkgrey;
      color: black; 
    }
`;

class Day extends React.Component {

  render() {
    let check = moment(this.props.day.date._d).format('YYYY-MM-DD');

    const { day: { date, number } } = this.props;
    
    return (
      <NumDay to= {`/month/week/${check}`} key={date.toString()} >
        {number} 
      </NumDay>
    );
  }
}

export default Day;