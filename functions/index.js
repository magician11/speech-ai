const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const speechSynthesis = require('./speech-synthesis');

exports.textToSpeech = functions.https.onRequest((req, res) => {
  return cors(req, res, async () => {
    const speech = await speechSynthesis(req.query.text);
    res.send(speech);
  });
});
