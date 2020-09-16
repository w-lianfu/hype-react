import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Button } from '@material-ui/core';

import auth from '@globalStore/auth';

interface IProps extends RouteComponentProps {
  history: any;
}
interface IState {}

const Home = (props: IProps, state: IState) => {
  const onLock = () => {
    auth.setAuth(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary">Home Page</Button>
      <Button variant="contained" color="secondary" onClick={onLock}>Lock</Button>
    </div>
  );
};

export default withRouter(observer(Home));
