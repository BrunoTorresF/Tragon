import firebase from 'firebase';
import {AUTH_CONFIG} from '../../../../env';

const config = {
  apiKey: AUTH_CONFIG.apiKey,
  authDomain: AUTH_CONFIG.authDomain,
  databaseURL: 'https://tragon-8e6ce.firebaseio.com',
  storageBucket: AUTH_CONFIG.storageBucket,
  messagingSenderId: AUTH_CONFIG.messagingSenderId,
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
export const provider = new firebase.auth.FacebookAuthProvider();
