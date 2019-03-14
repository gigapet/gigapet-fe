import React from 'react';
import { Route } from 'react-router-dom';
import HomePageNav from './HomePageNav';
import Month from './Month';
import WeekView from './WeekView';
import DayCard from './DayCard';
import Info from './Info';


class HomePageView extends React.Component {
   constructor(props) {
      super(props);
      this.state = {  }
   }


   render() { 
      return ( 
         <div>
            <HomePageNav signOut = {this.props.signOut}/>
            <Route exact path = '/info' component = {Info} />
            <Route exact path = '/month' render = {props => <Month {...props} />} />
            <Route exact path = '/month/week' component = {WeekView} />
            <Route exact path = '/month/week/:date' component = {DayCard} />
         </div>
      )
   }
}

export default HomePageView;