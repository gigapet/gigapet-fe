import React from 'react';
import { Route } from 'react-router-dom';
import HomePageNav from './HomePageNav';
import Month from './Month';


class HomePageView extends React.Component {
   constructor(props) {
      super(props);
      this.state = {  }
   }


   render() { 
      return ( 
         <div>
            <HomePageNav/>
            <Route exact path = '/Month' component = {Month} />

         </div>
      )
   }
}

export default HomePageView;