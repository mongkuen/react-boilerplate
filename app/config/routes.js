import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Main from '../components/Main/Main'
import Home from '../components/Home/Home'
import ForecastContainer from '../containers/ForecastContainer'
import DaycastContainer from '../containers/DaycastContainer'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='/forecast/:location' component={ForecastContainer} />
      <Route path='/daycast' component={DaycastContainer} />
    </Route>
  </Router>
);

export default routes
