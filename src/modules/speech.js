import firebase from './firebase';

const say = async (text, readyToPlay) => {
  return new Promise(async (resolve, reject) => {
    var textToSpeech = firebase.functions().httpsCallable('textToSpeech');
    const res = await textToSpeech({ text });
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio
    const speech = new Audio('data:audio/wav;base64,' + res.data.audioContent);
    speech.addEventListener('ended', () => {
      resolve();
    });
    speech.addEventListener('canplaythrough', event => {
      readyToPlay();
      speech.play();
    });
  });
};

export { say };
