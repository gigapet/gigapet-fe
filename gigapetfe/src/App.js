import React, { Component } from 'react';
import './App.css';
import View from './components/login/view';
import HomePageView from './components/homepage/HomePageView';
import authenticate from './components/login/authentication';
import { withRouter } from 'react-router-dom';

class App extends Component {

  componentDidMount(){
    console.log(window.location.pathname)

    if(!localStorage.getItem("userdata") && window.location.pathname !== '/signup'){
    this.props.history.push('./login');
    }
  }


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

