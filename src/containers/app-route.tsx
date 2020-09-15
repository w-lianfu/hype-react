import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteComponentProps,
} from 'react-router-dom';

import '@globalScss/index.scss';
import AppTheme from './app-theme';
import AppMenu from './app-menu';

interface IProps {}
interface IState {}

const AppRoute = (props: IProps, state: IState) => {
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
