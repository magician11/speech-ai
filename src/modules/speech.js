import ky from 'ky';

const say = async (text, readyToPlay) => {
  return new Promise(async (resolve, reject) => {
    const response = await ky
      .post(
        `https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
        {
          json: {
            audioConfig: {
              audioEncoding: 'LINEAR16'
            },
            input: {
              text
            },
            voice: {
              languageCode: 'en-GB',
              name: 'en-GB-Wavenet-A'
            }
          }
        }
      )
      .json();

    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio
    const speech = new Audio('data:audio/wav;base64,' + response.audioContent);
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
