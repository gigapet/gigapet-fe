import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import Day from './Day';
import WeekView from './WeekView';
import Month from './Month';
import { LoginPage } from '../login/LoginPage';
import './index.css';

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
    color: darkslateblue;
`;

const StyledLink = styled(Link)`
    font-size: 1.8rem;
    text-decoration: none;
    padding-right: 10rem;
    color: darkslateblue;
`;



class HomePageNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {  }
     }
  
  
  
     render() { 
        return ( 
        
        <div>
           <Nav>
                <StyledNavLink to= "/month" activeClassName = 'link' component = {Month}> Month </StyledNavLink>
                <StyledNavLink to= "/week" activeClassName = 'link' component = {WeekView}> Week </StyledNavLink>

                <StyledNavLink to= "/day" activeClassName = 'link' component = {Day}> Day </StyledNavLink>
                
                <StyledLink to="/" onClick = {this.props.signOut} component = {LoginPage}> Logout </StyledLink>
            </Nav>
        </div>);
     }
  }
  

  export default HomePageNav;