const functions = require('firebase-functions');
const translate = require('./translate');
const speechSynthesis = require('./speech-synthesis');

exports.textToSpeech = functions
  .runWith({
    timeoutSeconds: 540,
    memory: '2GB'
  })
  .https.onCall(async (data, context) => {
    const speech = await speechSynthesis(data.text);
    return speech;
  });

exports.translate = functions
  .runWith({
    timeoutSeconds: 540,
    memory: '2GB'
  })
  .https.onCall(async (data, context) => {
    const englishText = await translate(data.text);
    return englishText;
  });
