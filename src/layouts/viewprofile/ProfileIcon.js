import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const styles = {
  bigAvatar: {
    marginTop: 30,
    marginBottom: 10,
    width: 80,
    height: 80,
  },
};

function ProfileIcon(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt="Remy Sharp" src="/static/images/avatar/elonmusk.jpg" className={classes.bigAvatar} />
    </Grid>
  );
}

ProfileIcon.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileIcon);
