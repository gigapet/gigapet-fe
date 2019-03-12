import React, { Component } from 'react';
import './App.css';
import View from './components/login/View';
import HomePageView from './components/homepage/HomePageView';
import authenticate from './components/login/authentication';


class App extends Component {
  
  render() {
    return (
      <div className="App">
       <Auth/>
      </div>
    );
  }
}

const Auth = authenticate(HomePageView)(View);

export default App;
