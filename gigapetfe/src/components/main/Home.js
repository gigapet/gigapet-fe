import React, { Component } from 'react';
import Calendar from '../calendar/Calendar';
import moment from 'moment';


export class Home extends Component {
    constructor() {
     super();
     let today = moment().format('LL');
    this.state ={
        today: today,
    }
}
  render() {
    return (
      <div>
        <h2>{this.state.today}</h2>
        <Calendar />
      </div>
    )
  }
}

export default Home
