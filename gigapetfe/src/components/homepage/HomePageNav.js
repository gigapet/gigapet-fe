import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
// import Day from './Day';
import WeekView from './WeekView';
import Month from './Month';

const Nav = styled.nav`
    padding: 2rem 0 2rem 0;
    display: flex;
    justify-content: flex-end;
    border-bottom: 3px solid black;
`;

const StyledNavLink = styled(NavLink)`
    font-size: 1.8rem;
    text-decoration: none;
    padding-right: 10rem;
    color:black;
`;
const StyledLink = styled(Link)`
    font-size: 1.8rem;
    text-decoration: none;
    padding-right: 10rem;
    color:black;
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
        History.push('/');
     }
  
  
     render() { 
        return ( 
        
        <div>
           <Nav>
                <StyledNavLink to= "/month" component = {Month}            > Month  </StyledNavLink>
                <StyledNavLink to= "/week"  component = {WeekView}         > Week   </StyledNavLink>
                {/* <StyledNavLink to= "/day"   component = {Day}              > Day    </StyledNavLink> */}
                <StyledLink    to ="/"      onClick   = {this.clearStorage}> Logout </StyledLink>
            </Nav>
        </div>);
     }
  }
  

  export default HomePageNav;