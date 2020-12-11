import firebase from 'firebase/app';
import 'firebase/functions';

const firebaseConfig = {
  apiKey: 'AIzaSyA6hYDr4hEGFb2UXp3qvFGvk6qQbHGHFU8',
  authDomain: 'speech-ai-1111.firebaseapp.com',
  databaseURL: 'https://speech-ai-1111.firebaseio.com',
  projectId: 'speech-ai-1111',
  storageBucket: 'speech-ai-1111.appspot.com',
  messagingSenderId: '162874545579',
  appId: '1:162874545579:web:24a8be71fa1c61081eeeee',
  measurementId: 'G-EH888XZH2Q'
};

firebase.initializeApp(firebaseConfig);

export default firebase;
