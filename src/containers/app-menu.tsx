import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  withRouter,
  RouteComponentProps,
  Redirect,
  Link,
} from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper } from '@material-ui/core';

import auth from '@globalStore/auth';
import screen from '@globalStore/screen';
import Home from '@comp/home';
import Setting from '@comp/setting';
import AppLock from './app-lock';

interface IProps extends RouteComponentProps {
  history: any;
}
interface IState {}

const AppMenu = (props: IProps, state: IState) => {
  const onResize = () => {
    screen.setSize();
  };

  useEffect(() => {
    screen.setSize();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [auth.isAuth]);

  return (
    <Paper
      square
      style={{
        height: `${screen.height}px`,
        width: '100%',
      }}>
      <p>
        <Link to="/home">Home</Link>
      </p>
      <p>
        <Link to="/setting">Setting</Link>
      </p>

      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/setting" component={Setting} />
        <Route render={() => (
          auth.isAuth ? <Redirect to="/home" /> : <AppLock />
        )} />
      </Switch>
    </Paper>
  );
};

export default withRouter(observer(AppMenu));
