import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { observer } from 'mobx-react';

import '@globalScss/index.scss';
import auth from '@globalStore/auth';
import AppTheme from './app-theme';
import AppMenu from './app-menu';
import AppRoot from './app-root';

interface IProps {}
interface IState {}

const AppRoute = (props: IProps, state: IState) => {
  return (
    <AppTheme>
      <Router>
        <Switch>
          <Route exact path="/" component={auth.isAuth ? AppMenu : AppRoot} />
          <Route component={auth.isAuth ? AppMenu : AppRoot} />
        </Switch>
      </Router>
    </AppTheme>
  );
};

export default observer(AppRoute);
