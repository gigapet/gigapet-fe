import React from 'react';
import axios from 'axios';

const url = "https://gigapetserver.herokuapp.com/";

const authenticate = App => Login => 
    class extends React.Component{
        constructor(){
            super();
            this.state = ({
                username: '',
                password: '',
                loggedIn: false
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
            console.log(this.state.username)
            console.log(this.state.password)
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
                return <App signOut = {this.signOut}/>
                // return <Login 
                // handleChanges = {this.handleChanges}
                // signIn = {this.signIn}
                // username = {this.state.username}
                // password = {this.state.password}
                // />
            }
        }
    }


export default authenticate;