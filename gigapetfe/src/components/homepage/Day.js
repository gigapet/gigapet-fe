import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import DayView from './DayView';
import moment from 'moment'

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
    :hover {
      background: darkgrey;
      color: black; 
    }
`;

class Day extends React.Component {




  render() {
    let check = moment(this.props.day.date._d).format('l');
    const { day: { date, number } } = this.props;
    
    return (
      <NumDay to= {`/${check}`} key={date.toString()} >
        {number} 
      </NumDay>
    );
  }
}

export default Day