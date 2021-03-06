import React from 'react'
import styled from 'styled-components';

const DayTitle = styled.div`
  display:flex;
  margin: 0 auto;
  background-color: rgb(26, 25, 25);
  border: 3px solid black;
`;

const DayT = styled.span`
    display:flex;
    width: 14rem;
    height: 4rem;
    justify-content: space-evenly;
    align-items:center;
    font-size: 2.5rem;
    margin:1rem auto;
    color: white;
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

export default DayNames;