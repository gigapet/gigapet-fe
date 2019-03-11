import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignUp from './SignUp'
import NavBar from '../navbar/NavBar';

class View extends React.Component {
    constructor(props) {
        super();
        this.state = {}
    }


    render() { 
        return (
            <div>
                <NavBar/>
                <Route exact path ="/login" component = {LoginPage}/>
                <Route exact path ="/signup" component = {SignUp}/>
            </div>
        );
    }
}
 
export default View;