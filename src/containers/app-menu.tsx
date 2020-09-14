import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  withRouter,
  RouteComponentProps,
  Link,
} from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper } from '@material-ui/core';

import Home from '@comp/home';
import Setting from '@comp/setting';
import screen from '@globalStore/screen';

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
  }, []);

  return (
    <Paper
      square
      style={{
        height: `${screen.height}px`,
        width: '100%',
      }}>
      <h2>Hello</h2>
      <p>
        <Link to="/home">Home</Link>
      </p>
      <p>
        <Link to="/setting">Setting</Link>
      </p>

      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/setting" component={Setting} />
      </Switch>
    </Paper>
  );
};

export default withRouter(observer(AppMenu));
