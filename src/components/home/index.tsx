import React from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Box, Typography, Button } from '@material-ui/core';

interface IProps extends RouteComponentProps {
  history: any;
}
interface IState {}

const Home = (props: IProps, state: IState) => {
  return (
    <Box>
      <Typography>Sweden is part of the geographical area of Fennoscandia.</Typography>
      <Link to="/setting">
        <Button variant="contained">Setting Page</Button>
      </Link>
    </Box>
  );
};

export default withRouter(observer(Home));
