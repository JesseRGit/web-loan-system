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
    marginRight: 20
  },
};

function TopNav(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar style={{ maxHeight: '80px', minHeight: '80px' }} position="static">
        <Toolbar>
          <SwipeableTemporaryDrawer />
            <Link href="/">
              <Button style={{ maxHeight: '80px', minHeight: '80px' }} size="large" color="inherit">
                 <Typography style= {{  fontSize: 36 }} variant="title" color="inherit">Loan System</Typography>
              </Button>
            </Link>
            <Typography variant="madeby" style={{ marginLeft: 'auto', marginRight: -12 }} color="inherit" >
              Made by Jesse Rönkkö
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

TopNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopNav);
