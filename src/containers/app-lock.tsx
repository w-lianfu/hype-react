import React, { useEffect, ReactNode } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper, Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import auth from '@globalStore/auth';
import AppPortal from './app-portal';

interface IProps extends RouteComponentProps {
  history: any;
  children: ReactNode;
}
interface IState {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    lockStyle: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1100,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'rgba(255, 255, 255, 0.8)',
    },
    typography: {
      marginBottom: '30px',
    },
  }));

const AppLock = (props: IProps, state: IState) => {
  const { history, children } = props;
  const classes = useStyles();

  const onLogin = () => {
    auth.setAuth(true);
  };

  return (
    <AppPortal>
      <Paper square className={classes.lockStyle}>
        <Button variant="contained" color="primary" onClick={onLogin}>Login</Button>
      </Paper>
      <>{children}</>
    </AppPortal>
  );
};

export default withRouter(observer(AppLock));
