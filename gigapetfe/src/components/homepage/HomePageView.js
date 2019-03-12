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
            <HomePageNav {...this.props} signOut = {this.props.signOut}/>
            <Route exact path = '/month' component = {Month} />
            <Route exact path = '/week' component = {WeekView} />
            <Route exact path = '/day/:id' render ={props => <Day {...props}/>} />

         </div>
      )
   }
}

export default HomePageView;