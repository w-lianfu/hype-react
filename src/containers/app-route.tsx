import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '@globalScss/index.scss';
import AppTheme from './app-theme';
import Home from '@comp/home';

const AppRoute = () => {
  return (
    <AppTheme>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={Home} />
        </Switch>
      </Router>
    </AppTheme>
  );
};

export default AppRoute;
