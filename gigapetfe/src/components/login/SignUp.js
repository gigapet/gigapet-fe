import React from 'react';
import styled from 'styled-components';

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

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            verifypassword: ''
        })
    }

    handleChanges = event => {
        event.preventDefault();
        this.setState({
          [event.target.name]:event.target.value
        })
    }
  
    
    render() { 
        return (
            <div>
                <SignupForm>
                    <Title>Create your account!</Title>
                    <Input 
                    placeholder = "firstname..."
                    type = "text"
                    value = {this.state.firstname}
                    name = "firstname"
                    onChange = {this.handleChanges}
                    />

                    <Input 
                    placeholder = "lastname..."
                    type = "text"
                    value = {this.state.lastname}
                    name = "lastname"
                    onChange = {this.handleChanges}
                    />

                    <Input 
                    placeholder = "email..."
                    type = "text"
                    value = {this.state.email}
                    name = "email"
                    onChange = {this.handleChanges}
                    />

                    <Input 
                    placeholder = "password..."
                    type = "text"
                    value = {this.state.password}
                    name = "password"
                    onChange = {this.handleChanges}
                    />

                    <Input 
                    placeholder = "verifypassword..."
                    type = "text"
                    value = {this.state.verifypassword}
                    name = "verifypassword"
                    onChange = {this.handleChanges}
                    />
                    <Button>Submit</Button>
                </SignupForm>
            </div>
         );
    }
}
 
export default SignUp;