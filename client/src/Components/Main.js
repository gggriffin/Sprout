import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Trending from './Pages/Trending/Trend';
import Collaborate from './Pages/Collaborate/Collaborate';
import Projects from './Pages/Projects/Projects';

function Main() {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/home' component={Home}></Route>
      <Route exact path='/trending' component={Trending}></Route>
      <Route exact path='/collaborate' component={Collaborate}></Route>
      <Route exact path='/projects' component={Projects}></Route>
    </Switch>
  );
}

export default Main;