import React from 'react';
import View from './View';
import { Redirect, Route } from 'react-router-dom';




const AuthTest = ({ component: Component, ...rest }) => {

    return (
        <Route {...rest} 
        render = { props => localStorage.getItem('token') ? (<Component {...props} /> ) : ( <Redirect to = '/login' /> )}
        />
    )

}

export default AuthTest;

