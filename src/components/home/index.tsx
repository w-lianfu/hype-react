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
      <Typography variant="h4" gutterBottom>Find Your Greatness</Typography>
      <Typography>
        Greatness. It’s just something we made up.
        Somehow we’ve come to believe that greatness is a gift,
        reserved for a chosen few — for prodigies,
        for superstars — and the rest of us can only stand by watching.
        You can forget that. Greatness is not some rare DNA strand.
        It’s not some precious thing. Greatness is no more unique to us than breathing.
        We’re all capable of it, all of us.
      </Typography>
      <Link to="/setting">
        <Button variant="contained">Setting Page</Button>
      </Link>
    </Box>
  );
};

export default withRouter(observer(Home));
