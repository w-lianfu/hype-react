import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react';

import AppLock from './app-lock';
import AppMenu from './app-menu';

interface IProps extends RouteComponentProps {
  history: any;
}
interface IState {}

const AppRoot = (props: IProps, state: IState) => {
  return (
    <AppLock>
      <AppMenu />
    </AppLock>
  );
};

export default withRouter(observer(AppRoot));
