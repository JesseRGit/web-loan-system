import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Link from 'next/link';
import SwipeableTemporaryDrawer from './SideNav'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <SwipeableTemporaryDrawer />
          <Link href="/"><Button color="inherit"><h1>Loan System</h1></Button></Link>
          <Link href="/clock"><Button color="inherit">Clock</Button></Link>
          <Link href="/countries3a"><Button color="inherit">Countries Local</Button></Link>
          <Link href="/countries4b"><Button color="inherit">Countries Remote</Button></Link>
          <Link href="/countriesinone"><Button color="inherit">Countries Combined</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
