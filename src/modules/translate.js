import ky from 'ky';

const translate = async text => {
  const response = await ky
    .post(
      `https://translation.googleapis.com/language/translate/v2?key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
      {
        json: {
          q: text,
          target: 'en',
          format: 'text'
        }
      }
    )
    .json();

  return response.data.translations[0].translatedText;
};

export { translate };
