import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '@globalScss/index.scss';
import AppTheme from './app-theme';
import AppMenu from './app-menu';

const AppRoute = () => {
  return (
    <AppTheme>
      <Router>
        <Switch>
          <Route exact path="/" component={AppMenu} />
          <Route component={AppMenu} />
        </Switch>
      </Router>
    </AppTheme>
  );
};

export default AppRoute;
