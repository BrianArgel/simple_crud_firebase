import firebase from 'firebase';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: `${process.env.KEY_PRIVATE}`,
    authDomain: "ract-firebase-737a0.firebaseapp.com",
    projectId: "ract-firebase-737a0",
    storageBucket: "ract-firebase-737a0.appspot.com",
    messagingSenderId: "435606015593",
    appId: "1:435606015593:web:b781c1cf036ab0e85a1cf8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export {firebase}