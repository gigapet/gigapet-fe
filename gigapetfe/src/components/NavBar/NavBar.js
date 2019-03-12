import React from 'react';
import { Link } from 'react-router-dom';
import LoginPage from '../login/LoginPage';
import SignUp from '../login/SignUp';
import styled from 'styled-components';
import Home from '../main/Home'

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

const NavBar = (props) => {
    return ( 
        <div>
            <Nav>
                <StyledLink exact to="/" component = {LoginPage}> Log In </StyledLink>
                <StyledLink to="/signup" component = {SignUp}>  Sign Up </StyledLink>
                <StyledLink to="/home" component = {Home}>  Home </StyledLink>

            </Nav>
        </div>
     );
}
 
export default NavBar;
