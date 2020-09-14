import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react';

interface IProps extends RouteComponentProps {
  history: any;
}
interface IState {}

const Setting = (props: IProps, state: IState) => {
  return (
    <h2>Setting...</h2>
  );
};

export default withRouter(observer(Setting));
