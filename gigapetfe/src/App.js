import React, { Component } from 'react';
import './App.css';
import View from './components/login/view';
import HomePageView from './components/homepage/HomePageView';
import authenticate from './components/login/authentication';
import {withRouter} from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
      <div className="App">
       <Auth/>
      </div>
    );
  }
}

const Auth = withRouter(authenticate(HomePageView)(View));

export default withRouter(App);
