const functions = require('firebase-functions');
const axios = require('axios');

// get speech from text
const translate = async text => {
  functions.logger.log('Translating to English', text);

  const response = await axios.post(
    `https://translation.googleapis.com/language/translate/v2?key=${
      functions.config().google.key
    }`,
    {
      q: text,
      target: 'en',
      format: 'text'
    }
  );

  return response.data;
};

module.exports = translate;
