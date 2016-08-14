import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Layout from './layout/Layout';
import Index from './pages/index/index';
import Test from './pages/test/index';
import Mobx from './pages/mobx/index';


const RouterComp = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Index}/>
      <Route path="/test" component={Test}/>
      <Route path="/mobx" component={Mobx}/>
    </Route>
  </Router>
);

export default RouterComp;
