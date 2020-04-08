import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const config = {
  apiKey: "AIzaSyCQCnnYcqG0AQ26uchJxug-sXxWkZVbn9Y",
  authDomain: "cryptocurency-portfolio.firebaseapp.com",
  databaseURL: "https://cryptocurency-portfolio.firebaseio.com",
  projectId: "cryptocurency-portfolio",
  storageBucket: "cryptocurency-portfolio.appspot.com",
  messagingSenderId: "856637685599",
  appId: "1:856637685599:web:60049008e0fe236be980ea",
};

firebase.initializeApp(config);

const database = firebase.database();
const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, auth, googleAuthProvider, database as default };
