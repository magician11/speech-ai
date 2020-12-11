import firebase from './firebase';

const say = async (text, readyToPlay) => {
  return new Promise(async (resolve, reject) => {
    console.log('about to get speech...');
    var textToSpeech = firebase.functions().httpsCallable('textToSpeech');
    const res = await textToSpeech({ text });
    // console.log('got speech...');
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio
    const speech = new Audio('data:audio/wav;base64,' + res.data.audioContent);
    speech.addEventListener('ended', () => {
      // console.log('all done playing.');
      resolve();
    });
    speech.addEventListener('canplaythrough', event => {
      console.log('about to start playing...');
      readyToPlay();
      speech.play();
    });
  });
};

export { say };
