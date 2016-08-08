import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Header from '../components/Header'
import Home from '../components/Home'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Header}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default routes
