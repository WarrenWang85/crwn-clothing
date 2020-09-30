import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
var config = {
  apiKey: "AIzaSyBy0esH6rz3q5ELK4TkhFBUoR2jdlWHhVU",
  authDomain: "crwn-clothing-9269d.firebaseapp.com",
  databaseURL: "https://crwn-clothing-9269d.firebaseio.com",
  projectId: "crwn-clothing-9269d",
  storageBucket: "crwn-clothing-9269d.appspot.com",
  messagingSenderId: "20430270296",
  appId: "1:20430270296:web:97361594fa66594e99bf2d",
  measurementId: "G-T9Q1QQ5W6V",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
