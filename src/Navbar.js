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
      <AppBar position="fixed" style={{background: 'transparent', boxShadow:'none', marginTop: '20px'}}>
        <Toolbar>
          <Typography align='left' variant="h5" color="inherit" className={classes.grow} style={{marginLeft: 65,}}>
            Drew Tucker
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Resume</Button>
        <Button color="inherit" style={{ marginRight: 65, }}> 
        <i class="material-icons" style={{marginRight: 3}}>code</i>
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
