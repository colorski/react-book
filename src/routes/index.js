import React, { Components } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from '../views/Home';

const routes = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
  </Router>
)

export default routes;