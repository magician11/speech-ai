import React, { Fragment, useState, useEffect } from 'react';
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
import { say } from '../modules/speech';
import { translate } from '../modules/translate';
import speakerImage from '../images/speaker.jpg';

const App = () => {
  const [text, setText] = useState();
  const [analysingText, setAnalysingText] = useState(false);
  const [readyToSpeak, setReadyToSpeak] = useState(false);
  const [isIphone, setIsIphone] = useState(false);
  const [device, setDevice] = useState();

  useEffect(() => {
    setDevice(navigator.platform);

    if (navigator.platform === 'iPhone') {
      setIsIphone(true);
    }
  }, []);

  const readyToPlay = () => setReadyToSpeak(true);

  const sayText = async () => {
    setAnalysingText(true);

    // https://stackoverflow.com/a/6259543/2813041
    var parts = text.match(/[\s\S]{1,2200}/g) || [];

    for (const part of parts) {
      const englishText = await translate(part);
      await say(englishText, readyToPlay);
      setReadyToSpeak(false);
    }

    setAnalysingText(false);
  };

  let status;
  if (readyToSpeak) {
    status = 'Let me read this back to you...';
  } else if (analysingText) {
    status = 'Analysing the text...';
  } else {
    status = "Enter some text when you're ready...";
  }

  const dashboard = isIphone ? (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ marginTop: 33 }}
    >
      <Grid item xs={12} sm={6} lg={4}>
        <Paper style={{ padding: 22, margin: 11 }}>
          <Typography variant="h6" gutterBottom>
            Sorry, this app doesn't work with iPhones.
          </Typography>
          <Typography variant="body1">
            It'll work on your computer though, even Macs 😀
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  ) : (
    <>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ marginTop: 33, marginBottom: 22 }}
      >
        <Grid item xs={10} sm={6} md={4} lg={3}>
          <Paper style={{ padding: 11 }}>
            <Typography variant="body2" gutterBottom>
              {status}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={10} sm={8} md={6}>
          <Paper elevation={3}>
            <TextField
              fullWidth
              autoFocus
              disabled={analysingText}
              onChange={event => setText(event.target.value)}
              value={text}
              multiline
              rows={11}
              placeholder="What would you like me to say?"
              variant="filled"
            />
          </Paper>
          <Box
            style={{
              textAlign: 'center',
              marginTop: 33
            }}
          >
            <Button
              variant="contained"
              onClick={sayText}
              disabled={analysingText}
            >
              Read it to me
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );

  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="transparent">
        <Toolbar>
          <Typography
            variant="h5"
            style={{
              color: 'white',
              flexGrow: 1
            }}
          >
            Speech AI
          </Typography>
          <Typography variant="caption" gutterBottom style={{ color: 'white' }}>
            Your device: {device}
          </Typography>
        </Toolbar>
      </AppBar>
      <div
        style={{
          backgroundImage: `url(${speakerImage})`,
          backgroundSize: 'cover',
          height: '100vh',
          paddingTop: 88
        }}
      >
        {dashboard}
      </div>
    </Fragment>
  );
};

export default App;
