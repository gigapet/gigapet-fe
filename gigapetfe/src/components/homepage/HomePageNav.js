import React from 'react';
import {  Link } from 'react-router-dom';
import styled from 'styled-components';
import Day from './Day';
import WeekView from './WeekView';
import Month from './Month';
import { LoginPage } from '../login/LoginPage';
import moment from 'moment';
import Info from './Info';

const Nav = styled.nav`
    padding: 2rem 0 2rem 0;
    display: flex;
    justify-content: flex-end;
    border-bottom: 3px solid black;
    background: white;
    min-width: 100%;
`;

const StyledNavLink = styled(Link)`
    font-size: 2rem;
    text-decoration: none;
    color: darkslateblue;
    padding-right: 5rem;
    transition: 500ms ease;

    :hover {
        transform: scale(1.02, 1.02)
    }
`;

const StyledLink = styled(Link)`
    font-size: 2rem;
    text-decoration: none;
    color: darkslateblue;
    padding-right: 5rem;
    transition: 500ms ease;

    :hover {
        transform: scale(1.03, 1.03)
    }
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
                <StyledNavLink to= "/info" component = {Info}> Home </StyledNavLink>
                <StyledNavLink to= "/month"  component = {Month}> Month </StyledNavLink>
                <StyledNavLink to= "/month/week"  component = {WeekView}> Week </StyledNavLink>
                <StyledNavLink to= {`/month/week/${moment().format('MM_DD_YYYY')}`} component = {Day}> Day </StyledNavLink>
                <StyledLink to="/" onClick = {this.props.signOut} component = {LoginPage}> Logout </StyledLink>
            </Nav>
        </div>);
     }
  }
  

  export default HomePageNav;