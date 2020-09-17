import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  withRouter,
  RouteComponentProps,
  Link,
} from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper, Button } from '@material-ui/core';

import auth from '@globalStore/auth';
import screen from '@globalStore/screen';
import Home from '@comp/home';
import Setting from '@comp/setting';
import AppDial from './app-dial';

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
      <AppDial />

      <p>
        <Link to="/home">
          <Button variant="contained" color="primary">Home Page</Button>
        </Link>
        <Link to="/setting">
          <Button variant="contained" color="secondary">Setting Page</Button>
        </Link>
      </p>
      <hr />

      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/setting" component={Setting} />
        <Route component={Home} />
      </Switch>
    </Paper>
  );
};

export default withRouter(observer(AppMenu));
