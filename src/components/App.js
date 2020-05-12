import React, { Fragment } from 'react';
import {
  Typography,
  CssBaseline,
  AppBar,
  Toolbar,
  TextField,
  Button,
  Paper,
  Box,
  Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import speakerImage from '../images/speaker.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url(${speakerImage})`,
    backgroundSize: 'cover',
    height: window.innerHeight
  },
  buttonContainer: {
    textAlign: 'center',
    marginTop: theme.spacing(3)
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
              rows={11}
              placeholder="What would you like me to say?"
              variant="filled"
            />
          </Paper>
          <Box className={classes.buttonContainer}>
            <Button variant="contained">Read it to me</Button>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};
