const functions = require('firebase-functions');
const got = require('got');

// get speech from text
const translate = async text => {
  functions.logger.log('Translating to English', text);

  const response = await got
    .post(
      `https://translation.googleapis.com/language/translate/v2?key=${
        functions.config().google.key
      }`,
      {
        json: {
          q: text,
          target: 'en',
          format: 'text'
        }
      }
    )
    .json();

  return response.data;
};

module.exports = translate;
