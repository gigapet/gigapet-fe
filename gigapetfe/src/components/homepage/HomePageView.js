import React from 'react';
import { Route } from 'react-router-dom';
import HomePageNav from './HomePageNav';
import Month from './Month';
import WeekView from './WeekView'
import DayView from './DayView'


class HomePageView extends React.Component {
   constructor(props) {
      super(props);
      this.state = {  }
   }


   render() { 
      return ( 
         <div>
            <HomePageNav/>
            <Route exact path = '/month' component = {Month} />
            <Route exact path = '/week' component = {WeekView} />
            <Route exact path = '/day' component = {DayView} />

         </div>
      )
   }
}

export default HomePageView;