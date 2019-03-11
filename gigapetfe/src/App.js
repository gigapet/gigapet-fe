import React, { Component } from 'react';
import './App.css';
import LoginPage from './components/login/LoginPage'
import { Route } from 'react-router-dom';
import SignUp from './components/login/SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path = "/" component = {LoginPage}/>
        <Route exact path = "/signup" component={SignUp}/>
      </div>
    );
  }
}

export default App;
