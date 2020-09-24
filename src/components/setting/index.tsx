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
      <Typography variant="h4">Think different</Typography>
      <Typography>
        Here’s to the crazy ones.
        The misfits, the rebels, the troublemakers.
        The round pegs in the square holes.
        The ones who see things differently.
        They are not fond of rules. And they have no respect for the status quo.
        You can quote them, disagree with them, glorify or vilify them.
        But the only thing you can’t do is ignore them.
        Because they change things.They push the human race forward.
        And while some may see them as the crazy ones, we see genius.
        Because the people who are crazy enough to think they can change the world,
        are the ones who do.
      </Typography>
      <Link to="/home">
        <Button variant="contained">Home Page</Button>
      </Link>
    </Box>
  );
};

export default withRouter(observer(Setting));
