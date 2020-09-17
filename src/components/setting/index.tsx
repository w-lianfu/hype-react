import React from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Box, Typography, Button } from '@material-ui/core';

interface IProps extends RouteComponentProps {
  history: any;
}
interface IState {}

const Setting = (props: IProps, state: IState) => {
  return (
    <Box>
      <Typography>Stockholm is the cultural, political, and economic centre of Sweden.</Typography>
      <Link to="/home">
        <Button variant="contained">Home Page</Button>
      </Link>
    </Box>
  );
};

export default withRouter(observer(Setting));
