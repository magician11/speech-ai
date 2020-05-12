import axios from 'axios';

const say = async text => {
  return new Promise(async (resolve, reject) => {
    const res = await axios(
      'https://us-central1-speech-ai-1111.cloudfunctions.net/textToSpeech',
      {
        params: {
          text
        }
      }
    );
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio
    const speech = new Audio('data:audio/wav;base64,' + res.data.audioContent);
    speech.addEventListener('ended', () => {
      resolve();
    });
    speech.play();
  });
};

export { say };
