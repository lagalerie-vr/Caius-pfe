import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBrisaajBvxJx79f8KGsEWN_je-PgV6-iU",
  authDomain: "cairus-ff66d.firebaseapp.com",
  projectId: "cairus-ff66d",
  storageBucket: "cairus-ff66d.appspot.com",
  messagingSenderId: "792154832403",
  appId: "1:792154832403:web:76944fc7484f7cf99c09e6",
};

//init firebase
firebase.initializeApp(firebaseConfig);


// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp };
