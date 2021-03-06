import React, { Component } from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex
    flex-direction: column
    align-items: center
    padding: 5rem 0 0 0;
    background-color: rgb(116, 116, 145);
    height: 100vh;
`;

const LogInTitle = styled.h2`
    color:white
    font-size: 3.5rem
    background-color: rgb(45, 45, 45)
    width:100%
    text-align: center
    padding: 1rem 1rem 0 1rem;
`;
const Form = styled.form`
    display:flex;
    flex-direction: column;
`;
const LogInInput = styled.input`
    width: 25rem;
    height: 3rem;
    font-size: 1.8rem;
    padding: 1rem;
    margin: 1rem;
    border-radius: 1rem;
    border: 2px solid black;
    text-align: center;
`;

const LogInButton = styled.button`
    color: white;
    background: midnightblue;
    font-size: 1.8rem;
    padding: 2rem 8rem;
    border-radius: 1rem;
    margin: 1.5rem;
    transition: 1s ease;

    :hover{
        color: midnightblue;
        transform: scale(1.2, .9);
        background:teal;
    }
`

;

export class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = ({
        
    });
  }


  render() {
    return (
      <Wrapper>
        <LogInTitle>Welcome! Please Log In!</LogInTitle>
        <Form type = "submit">
          <LogInInput placeholder = "username..."
          type = "text"
          value = {this.props.username}
          name = "username"
          onChange = {this.props.handleChanges}
          />

          <LogInInput placeholder = "password..."
           type = "password"
           value = {this.props.password}
           name = "password"
           onChange = {this.props.handleChanges}
           />
        </Form> 
        <LogInButton onClick = {this.props.signIn}>Login</LogInButton>
      </Wrapper>
    )
  }
}

export default LoginPage;
