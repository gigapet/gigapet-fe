import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
                <Switch>
                    <Route 
                    exact path ="/login" 
                    render = {(...props) => (<LoginPage 
                    handleChanges = {this.props.handleChanges} 
                    signIn = {this.props.signIn}
                    password = {this.state.password} 
                    username = {this.state.username}
                    {...props} /> )} 
                    />
                    <Route exact path ="/signup" component = {SignUp}/>
                </Switch>
            </div>
        );
    }
}
 
export default View;