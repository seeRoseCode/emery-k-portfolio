import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import PortfolioContainer from './components/containers/PortfolioContainer'
import NavBar from './components/navbar'
import ForumContainer from './components/containers/ForumContainer'
import PodcastContainer from './components/containers/PodcastContainer'
import CalendarContainer from './components/containers/CalendarContainer'
import BlogContainer from './components/containers/BlogContainer'
import ClientFormContainer from './components/containers/ClientFormContainer'
import HomeContainer from './components/containers/HomeContainer'
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
      <NavBar />
        <Switch>
          <Route exact path="/portfolio" component={PortfolioContainer} />
          <Route exact path='/podcast' component={PodcastContainer} />
          <Route exact path="/calendar" component={CalendarContainer} />
          <Route exact path="/blog" component={BlogContainer} />
          <Route exact path="/forum" component={ForumContainer} />
          <Route exact path="/sign-up" component={ClientFormContainer} />
          <Route exact path="/" component={HomeContainer} />
        </Switch>

      </div>
    );
  }
}

export default withRouter(App);
