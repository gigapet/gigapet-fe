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

    @media (max-width: 50rem){
        flex-direction: column;
        padding: 0;
        background:rgb(54, 53, 53);
    
    }
`;

const StyledNavLink = styled(Link)`
    font-size: 2rem;
    text-decoration: none;
    color: darkslateblue;
    padding-right: 5rem;
    transition: 500ms ease;

    :hover {
        transform: scale(1.02, 1.02);
    }

    @media (max-width: 50rem){
        flex-direction: column;
        padding: 0;
        padding: 1.5rem;
        border-bottom: 1px solid white;
        color: white;
    }
`;

const StyledLink = styled(Link)`
    font-size: 2rem;
    text-decoration: none;
    color: darkslateblue;
    padding-right: 5rem;
    transition: 500ms ease;
    border-bottom: 1px solid white;

    :hover {
        transform: scale(1.03, 1.03);
    }

    @media (max-width: 50rem){
        padding: 1.5rem;
        color: white;
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
                <StyledNavLink to= {`/month/week/${moment().format('YYYY-MM-DD')}`} component = {Day}> Day </StyledNavLink>
                <StyledLink to="/" onClick = {this.props.signOut} component = {LoginPage}> Logout </StyledLink>
            </Nav>
        </div>);
     }
  }
  

  export default HomePageNav;