import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Day from './Day';
import Week from './Week';
import Month from './Month';

const Nav = styled.nav`
    padding: 2rem 0 2rem 0;
    display: flex;
    justify-content: flex-end;
    border-bottom: 3px solid black;
`;

const StyledLink = styled(Link)`
    font-size: 1.8rem;
    text-decoration: none;
    padding-right: 10rem;
`;

class HomePageNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {  }
     }
  
  
     clearStorage = event => {
        event.preventDefault();
        window.localStorage.removeItem('user');
        window.location.reload();
        History.push('/login');
     }
  
  
     render() { 
        return ( 
        
        <div>
           <Nav>
                <StyledLink to= "/month" component = {Month}> Month </StyledLink>
                <StyledLink to= "/week" component = {Week}> Week </StyledLink>
                <StyledLink to= "/day" component = {Day}> Day </StyledLink>
            </Nav>
           <button onClick = {this.clearStorage}> CLEAR </button>
        </div>);
     }
  }
  

  export default HomePageNav;