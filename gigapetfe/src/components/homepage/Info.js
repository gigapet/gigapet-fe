import React from 'react'
import styled from "styled-components";

const H1 = styled.h1`
    padding-top:1rem;
    margin:0;
    z-index:0;
    color:black;
    font-weight: 900;
    font-size: 10rem;
`;

const Emoji = styled.div`
background-image:url(${require('../assets/home-img.jpg')});
background-size:cover;
background-position:center; 
width:100vw;
height:100vh;
background-repeat: no-repeat;
z-index:-100;
opacity: 0.5;
position: absolute;
margin:0;
`;
const P = styled.p`
    font-size:2.5rem;
    width:80%;
    margin:2rem auto 0 ;
    text-shadow: .1rem .1rem .1rem white;
    font-weight: 900;
`;
const Ul = styled.ul`
    border: 2px solid red;
    margin: 0 5rem;
    padding:2rem;
`;
const Li = styled.li`
   font-size:2rem;
   font-weight: 900;
   list-style:none;
   padding:1rem 0;
   text-align:left;
   text-shadow: .1rem .1rem .1rem white;
`;

export class Info extends React.Component {
  render() {
    return (
      <div>
        <Emoji />
        <H1>Welcome to Gigapets!</H1>
        <P>Keep track of all your meals for all of your children in one place! 
            Gigapet lets you add, delete and edit meals quickly so you can continue on with your busy schedule </P>

        <Ul>
            <Li>STEP 1: Click on your field of choice - Month / Week / Day </Li> 
            <Li>STEP 2: Select the desired day you would like to edit</Li>
            <Li>STEP 3: Once on your day, you can chose to add or edit a - Child / Food Selection </Li>
            <Li>STEP 4: Add Child - Simply type in child name and click "Add Child"</Li>
            <Li>STEP 5: Add Food - Fill out all food related fields and click "Add Meal"</Li>
            <Li>STEP 6: Delete - Click the "X" in the corner of your meal entry, thats it!</Li>
        </Ul>
      </div>
    )
  }
}

export default Info