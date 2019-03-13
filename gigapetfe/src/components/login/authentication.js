import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const url = "https://gigapetserver.herokuapp.com/";

const authenticate = App => Login => 
    class extends React.Component{
        constructor(){
            super();
            this.state = ({
                username: '',
                password: '',
                loggedIn: true
            })
        }

        handleChanges = event => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        //requires username and password
        signIn = event => {
            event.persist();
            axios
                .post(`${url}api/users/login`,{
                    username: this.state.username,
                    password: this.state.password
                })

                .then( res => {
                    localStorage.setItem("token", res.data.token);
                    this.setState({
                        loggedIn: true
                    });
                })
                .catch(err => alert(err));
            }

        signOut = event => {
            event.preventDefault();
            window.localStorage.clear();
            this.setState({
                loggedIn: false
            })
        }




        render(){
            if(this.state.loggedIn){
                return <App signOut = {this.signOut}/>
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