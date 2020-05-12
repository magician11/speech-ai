import axios from 'axios';

const translate = async text => {
  const res = await axios(
    'https://us-central1-speech-ai-1111.cloudfunctions.net/translate',
    {
      params: {
        text
      }
    }
  );

  return res.data.data.translations[0].translatedText;
};

export { translate };
