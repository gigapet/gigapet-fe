import React from 'react'
import styled from 'styled-components';

const DayTitle = styled.div`
  display:flex;
  margin: 0 auto;
  background-color:darkgrey;

`;

const DayT = styled.span`
    display:flex;
    justify-content:space-evenly;
    width:14rem;
    height:4rem;
    align-items:center;
    font-size:2rem;
    margin:1rem auto;
    color:black;
`;

class DayNames extends React.Component {
    render() {
        return (
          <DayTitle>
            <DayT>Sun</DayT>
            <DayT>Mon</DayT>
            <DayT>Tue</DayT>
            <DayT>Wed</DayT>
            <DayT>Thu</DayT>
            <DayT>Fri</DayT>
            <DayT>Sat</DayT>
          </DayTitle>
        );
    }
}

export default DayNames
