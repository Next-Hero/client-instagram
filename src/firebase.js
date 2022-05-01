import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBucH7Kzm8Ds5CbuUs8uQJlzTPh3eZcTzA",
  authDomain: "instagram-clone-23884.firebaseapp.com",
  databaseURL: "https://instagram-clone-23884.firebaseio.com",
  projectId: "instagram-clone-23884",
  storageBucket: "instagram-clone-23884.appspot.com",
  messagingSenderId: "671034896143",
  appId: "1:671034896143:web:3aceafdf2319c9f1fc587a",
});

// next hero firebase info if use need plear implement or go to console.firebase.google.com

// apiKey: "AIzaSyCUBhiOl8QdNnKU_AHMPqNwqk-BaTpqZ4w",
// authDomain: "mern-instagram-31fbe.firebaseapp.com",
// projectId: "mern-instagram-31fbe",
// storageBucket: "mern-instagram-31fbe.appspot.com",
// messagingSenderId: "778285250425",
// appId: "1:778285250425:web:37e9904ec120a8fa49e1a8"

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
