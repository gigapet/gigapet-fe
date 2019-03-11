import React, { Component } from 'react';
import './App.css';
import View from './components/login/view';


class App extends Component {
  constructor(props){
    super();
  }

  render() {
    return (
      <div className="App">
        <View/>
      </div>
    );
  }
}

export default App;
