import React, { Fragment } from 'react';
import {
  Typography,
  CssBaseline,
  AppBar,
  Toolbar,
  TextField,
  Paper,
  Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import speakerImage from '../images/speaker.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url(${speakerImage})`,
    backgroundSize: 'cover',
    height: window.innerHeight
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="transparent">
        <Toolbar>
          <Typography variant="h5">Speech AI</Typography>
        </Toolbar>
      </AppBar>

      <Grid
        container
        className={classes.root}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={10} sm={8} md={6}>
          <Paper elevation={3}>
            <TextField
              fullWidth
              autoFocus
              multiline
              rows={8}
              placeholder="What would you like me to say?"
              variant="filled"
            />
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};
