import React from 'react'
import styled from 'styled-components';

const NumDay = styled.div`
    display:flex;
    justify-content:center;
    width: 100%;
    height: 9vh;
    align-items:center;
    font-size: 2rem;
    margin: 0 auto;
   
    :hover {
      background: darkgrey;
      color: black; 
    }
`;

class Day extends React.Component {
    render() {
      const { day: { date, number } } = this.props;
  
      return (
        <NumDay key={date.toString()}>
         {number}
        </NumDay>
      );
    }
  }

export default Day