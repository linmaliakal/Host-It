import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyB5AZqJ_zeB9Q94a2H7HT3H2qfWu7elIDg",
  authDomain: "host-it-681bb.firebaseapp.com",
  databaseURL: "https://host-it-681bb.firebaseio.com",
  projectId: "host-it-681bb",
  storageBucket: "host-it-681bb.appspot.com",
  messagingSenderId: "579749829869"
};


export const initialize = () => {
  if(!firebase.apps.length) {
    firebase.initializeApp(config)
  }
  else {
    firebase.app();
  }
}


// setup listener for firebase updates
export const setListener = (endpoint, updaterFn) => {
  firebase.database().ref(endpoint).on('value', updaterFn);
  return () => firebase.database().ref(endpoint).off();
}
    