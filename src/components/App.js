import React, { Fragment, useState } from 'react';
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
import { say } from '../modules/speech';
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
  const [speaking, setSpeaking] = useState(false);
  const [text, setText] = useState();

  const sayText = async event => {
    setSpeaking(true);
    await say(text);
    setSpeaking(false);
  };

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
              onChange={event => setText(event.target.value)}
              value={text}
              multiline
              rows={11}
              placeholder="What would you like me to say?"
              variant="filled"
            />
          </Paper>
          <Box className={classes.buttonContainer}>
            <Button variant="contained" onClick={sayText} disabled={speaking}>
              Read it to me
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};
