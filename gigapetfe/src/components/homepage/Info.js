import React, { Component } from 'react'
import styled from "styled-components";

const Space = styled.div`
    padding:2rem;
`;
const H1 = styled.h1`
    padding:1rem;
    margin-top:0;
    z-index:0;
    color:black;
    background-color:rgba(150, 150, 150, 0.738);
    
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
    font-size:3rem;
    width:80%;
    margin:2rem auto 0 ;
    text-shadow: .1rem .1rem .1rem white;
    
`;
const Ul = styled.ul`
    border: 2px dashed red;
    margin: 0 5rem;
    padding:2rem;
    background-color:rgba(150, 150, 150, 0.538);

`;
const Li = styled.li`
   font-size:2rem;
   list-style:none;
   padding:1rem 0;
   text-align:center;
   text-shadow: .1rem .1rem .1rem white;
`;


export class Info extends Component {
  render() {
    return (
      <div>
        <Emoji />
        <Space></Space>
        <H1>Welcome to Gigapets!</H1>
        
        <P>Keep track of all your meals for all of your children in one place! 
            Gigapet lets you add meals quickly so you can continue on with your busy schedule </P>

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
