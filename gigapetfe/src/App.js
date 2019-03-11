import React, { Component } from 'react';
import './App.css';
import LoginPage from './components/login/LoginPage'
import { Route } from 'react-router-dom';
import SignUp from './components/login/SignUp';
import Home from './components/main/Home'
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Route exact path = "/" component = {LoginPage}/>
        <Route exact path = "/signup" component={SignUp}/>
        <Route exact path = "/home" component={Home}/>
      </div>
    );
  }
}

export default App;
