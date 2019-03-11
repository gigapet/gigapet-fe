import React from 'react';


const authenticate = App => Login => 
    class extends React.Component{
        constructor(){
            super();
            this.state = ({
                username: '',
                password: ''
            })
        }

        handleChanges = event => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        //requires username and password
        signIn = event => {
            event.preventDefault();
            window.localStorage.setItem('user', this.state.inputText);
            window.localStorage.setItem('code', this.state.password);
            window.location.reload();
        }

        render(){
            if(localStorage.getItem('user') && localStorage.getItem('code')){
                return <App/>
            } else {
                return <Login 
                handleChanges = {this.handleChanges}
                signIn = {this.signIn}
                username = {this.state.username}
                password = {this.state.password}
                />
            }
        }
    }


export default authenticate;