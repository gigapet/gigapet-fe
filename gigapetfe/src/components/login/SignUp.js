import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SignupForm = styled.form`
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(116, 116, 145);
    height: 100vh;
`;

const Title = styled.h2`
    color:white
    font-size: 3.5rem
    background-color: rgb(45, 45, 45)
    width:100%
    text-align: center
    padding: 1rem 1rem 0 1rem;
`;

const Input = styled.input`
    width: 25rem;
    height: 3rem;
    font-size: 1.8rem;
    padding: 1rem;
    margin: 1rem;
    border-radius: 1rem;
    border: 2px solid black;
    text-align: center;
`;

const Button = styled.button`
    color: white;
    background: midnightblue;
    font-size: 1.8rem;
    padding: 2rem 8rem;
    border-radius: 1rem;
    margin: 1.5rem;
    transition: 1s ease;
    :hover{
        color: teal;
        transform: scale(1.1, .8)
    }
`;

const url = "https://gigapetserver.herokuapp.com/";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            username: '',
            email: '',
            password: '',
            verifypassword: ''
        }
    }

    handleChanges = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    register = event => {
        event.preventDefault();
        if(this.state.password === this.state.verifypassword){
        axios
            .post(`${url}api/users/register`, {
                fullname: this.state.fullname,
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            })

            .then(res => {
                console.log('Its working', res)
            })

            .catch( error => console.log('OH NO', error));

            this.setState({
                    fullname: '',
                    username: '',
                    email: '',
                    password: '',
                    verifypassword: ''
            })} else {
                alert('Password does not match!')
                this.setState({
                    fullname: '',
                    username: '',
                    email: '',
                    password: '',
                    verifypassword: ''
            })
                
            }
    }
  
    
    render() { 
        return (
            <div>
                <SignupForm type = "submit">
                    <Title>Create your account!</Title>
                    <Input 
                    placeholder = "fullname..."
                    type = "text"
                    value = {this.state.fullname}
                    name = "fullname"
                    onChange = {this.handleChanges}
                    required
                    />

                    <Input 
                    placeholder = "username..."
                    type = "text"
                    value = {this.state.username}
                    name = "username"
                    onChange = {this.handleChanges}
                    required
                    />

                    <Input 
                    placeholder = "email..."
                    type = "email"
                    value = {this.state.email}
                    name = "email"
                    onChange = {this.handleChanges}
                    required
                    />

                    <Input 
                    placeholder = "password..."
                    type = "password"
                    value = {this.state.password}
                    name = "password"
                    onChange = {this.handleChanges}
                    required
                    />

                    <Input 
                    placeholder = "verifypassword..."
                    type = "password"
                    value = {this.state.verifypassword}
                    name = "verifypassword"
                    onChange = {this.handleChanges}
                    required
                    />
                     <Button onClick = {this.register}> Submit </Button>
                </SignupForm>
            </div>
         );
    }
}
 
export default SignUp;