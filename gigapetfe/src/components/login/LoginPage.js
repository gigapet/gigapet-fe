import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogInPage = styled.div`
    display:flex
    flex-direction: column
    align-items: center
    padding: 5rem 0 0 0;
    background-color: rgb(116, 116, 145);
    height: 100vh;
`;

const LogInTitle = styled.h2`
    color:white
    font-size: 2.5rem
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
    width:15rem;
    height:3rem;
    font-size:1.8rem;
    padding:1rem;
    margin:1rem;
    border-radius:1rem;
    border: .2rem solid black;
`;

const LogInButton = styled.button`
    color:white;
    background: midnightblue;
    padding: 2rem 5rem;
    font-size: 2rem
    background-color: rgb(45, 45, 45)
    width:100%
    text-align: center
    border-radius: .5rem;
    border: .1rem solid black;
    transition: 1s ease;

    :hover{
        color: midnightblue;
        transform: scale(1.2, .9);
        background:teal;
    }
`
const DontHaveLogin = styled.h2`
  font-size: 1.5rem;
`
const SignUp = styled.button`
    color: white;
    font-size: 2rem;
    margin-top: 1rem;
    background: teal;
    padding: 1.9rem 3.6rem
    border-radius: .5rem;
    border: .1rem solid black;
    transition: 1s ease;

    :hover{
        color: midnightblue;
        transform: scale(1.2, .9);
        background:teal;
    }
`;

;

export class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = ({
      username:'',
      password:'',
    });
  }
    
  handleChanges = event => {
      event.preventDefault();
      this.setState({
        [event.target.name]:event.target.value
      })
  }

  render() {
    return (
      <LogInPage>
        <LogInTitle>Welcome! Please Log In!</LogInTitle>
        <Form>
          <LogInInput placeholder = "username..."
          type = "text"
          value = {this.state.username}
          name = "username"
          onChange = {this.handleChanges}
          required
          />

          <LogInInput placeholder = "password..."
           type = "text"
           value = {this.state.password}
           name = "password"
           onChange = {this.handleChanges}
           required
           />
        </Form>
        <LogInButton>LogIn</LogInButton>
        <DontHaveLogin>Don't have an account? Not a problem...</DontHaveLogin>
        <Link to="/signup"><SignUp>Sign Up!</SignUp></Link>
      </LogInPage>
    )
  }
}

export default LoginPage;
