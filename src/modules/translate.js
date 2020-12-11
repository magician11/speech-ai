import firebase from './firebase';

const translate = async text => {
  var translateText = firebase.functions().httpsCallable('translate');
  const res = await translateText({ text });

  return res.data.translations[0].translatedText;
};

export { translate };
