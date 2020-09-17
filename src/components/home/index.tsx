import React from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper, Typography, Button } from '@material-ui/core';

interface IProps extends RouteComponentProps {
  history: any;
}
interface IState {}

const Home = (props: IProps, state: IState) => {
  return (
    <Paper square>
      <Typography>志，当立于青天白云之上，方可不沾染尘埃...</Typography>
      <Link to="/setting">
        <Button variant="contained">Setting Page</Button>
      </Link>
    </Paper>
  );
};

export default withRouter(observer(Home));
