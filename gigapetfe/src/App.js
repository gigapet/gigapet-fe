import React, { Component } from 'react';
import './App.css';
import LoginPage from './components/login/LoginPage'
import { Route } from 'react-router-dom';
import SignUp from './components/login/SignUp';
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Route exact path = "/login" component = {LoginPage}/>
        <Route exact path = "/signup" component={SignUp}/>
      </div>
    );
  }
}

export default App;
