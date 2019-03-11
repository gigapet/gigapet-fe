import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SignupForm = styled.form`
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(116, 116, 145);
    height: 100vh;
`;

const Input = styled.input`
    width:15rem;
    height:1.5rem;
    font-size:1.2rem;
    padding:1rem;
    margin:1rem;
    border-radius:1rem;
    border: 2px solid black;
    text-align: center;
`;

const Button = styled.button`
    color: white;
    background: midnightblue;
    font-size: 1.2rem;
    padding: 1.5rem 5rem;
    border-radius: .5rem;
    margin: .5rem;
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
                    <h1>Create your account!</h1>
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
                    <Link to = "/"><Button> Login </Button></Link>
                </SignupForm>
            </div>
         );
    }
}
 
export default SignUp;