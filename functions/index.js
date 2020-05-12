const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const translate = require('./translate');
const speechSynthesis = require('./speech-synthesis');

exports.textToSpeech = functions.https.onRequest((req, res) => {
  return cors(req, res, async () => {
    const speech = await speechSynthesis(req.query.text);
    res.send(speech);
  });
});

exports.translate = functions.https.onRequest((req, res) => {
  return cors(req, res, async () => {
    const englishText = await translate(req.query.text);
    res.send(englishText);
  });
});
