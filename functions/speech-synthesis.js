const functions = require('firebase-functions');
const got = require('got');

/*

get speech from text
https://cloud.google.com/text-to-speech/docs/reference/rest/v1beta1/text/synthesize#synthesisinput

"The input size is limited to 5000 characters."

It seems to fail though for characters over 2200

*/
const speechSynthesis = async text => {
  let textToSynthesise = text;
  const maxCharacters = 2200;
  if (text.length > maxCharacters) {
    textToSynthesise = `You have too much to say. I can't synthesise more than ${maxCharacters} characters at a time. You sent in ${text.length} characters.`;
  }

  functions.logger.log(
    `Synthesising the following ${textToSynthesise.length} characters of text to speech`,
    textToSynthesise
  );

  const response = await got
    .post(
      `https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=${
        functions.config().google.key
      }`,
      {
        json: {
          audioConfig: {
            audioEncoding: 'LINEAR16'
          },
          input: {
            text: textToSynthesise
          },
          voice: {
            languageCode: 'en-GB',
            name: 'en-GB-Wavenet-A'
          }
        }
      }
    )
    .json();

  return response;
};

module.exports = speechSynthesis;
