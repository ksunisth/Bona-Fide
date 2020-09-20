import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../src/Pages/Home';
import History from '../src/Pages/History';

export default (): React.ReactElement => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/history" exact component={History} />
    </Switch>
  </Router>
);
