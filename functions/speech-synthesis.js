const functions = require('firebase-functions');
const axios = require('axios');

// get speech from text
const speechSynthesis = async text => {
  functions.logger.log('Synthesising the following text to speech', text);

  const response = await axios.post(
    `https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=${
      functions.config().google.key
    }`,
    {
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
  );

  return response.data;
};

module.exports = speechSynthesis;
