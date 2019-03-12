import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignUp from './SignUp'
import LogNav from './LogNav';

class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() { 
        return (
            <div>
                <LogNav/>
                <Route 
                    exact path ="/login" 
                    render = {() => (<LoginPage 
                    handleChanges = {this.props.handleChanges} 
                    signIn = {this.props.signIn}
                    password = {this.state.password} 
                    username = {this.state.username} /> )} 
                    />

                <Route exact path ="/signup" component = {SignUp}/>
            </div>
        );
    }
}
 
export default View;