import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

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

function Navbar(props) {
  const { classes } = props;
  return <div className={classes.root}>
      <AppBar id="navbar" position="fixed" style={{ background: 'transparent', boxShadow: 'none', padding: '20px 0px 0px 0px', transition: 'all .3s' }}>
        <Toolbar>
          <Typography align="left" variant="h5" color="inherit" className={classes.grow} style={{ marginLeft: '5%' }}>
            Drew Tucker
          </Typography>
          <Button color="inherit">
            <i className="material-icons" style={{ margin: '0px 5px 3px 0px' }}>
              home
            </i>
            Home
          </Button>
          <Button color="inherit">
            <i className="material-icons" style={{ margin: '0px 5px 3px 0px' }}>
              business_center
            </i>
            Resume
          </Button>
          <Button color="inherit" style={{ marginRight: '5%' }}>
          <i className="material-icons" style={{ margin: '0px 5px 3px 0px' }}>
              code
            </i>
            Projects
          </Button>
        </Toolbar>
      </AppBar>
    </div>;
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
