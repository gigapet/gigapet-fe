import React from 'react';
import { Route } from 'react-router-dom';
import HomePageNav from './HomePageNav';
import Month from './Month';
import WeekView from './WeekView';
import Day from './Day';


class HomePageView extends React.Component {
   constructor(props) {
      super(props);
      this.state = {  }
   }


   render() { 
      return ( 
         <div>
            <HomePageNav signOut = {this.props.signOut}/>
            <Route exact path = '/month' render = {props => <Month {...props} />} />
            <Route exact path = '/week' component = {WeekView} />
         </div>
      )
   }
}

export default HomePageView;