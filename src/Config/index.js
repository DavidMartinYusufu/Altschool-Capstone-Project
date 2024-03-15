// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
  onAuthStateChanged ,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWLl7omsbf48i7KM9tDtU3Nukdg2OxxNI",
  authDomain: "altschool-capstone-proje-23dca.firebaseapp.com",
  projectId: "altschool-capstone-proje-23dca",
  storageBucket: "altschool-capstone-proje-23dca.appspot.com",
  messagingSenderId: "571612077293",
  appId: "1:571612077293:web:4390aa91292cbc760500e4",
  measurementId: "G-YQYSN3HWY9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//set up google auth provider..
const provider = new GoogleAuthProvider();
const auth = getAuth();
const database = getFirestore(app)
// const analytics = getAnalytics(app);

export { app, database, provider, auth, updateProfile, signInWithRedirect, getRedirectResult, onAuthStateChanged,  createUserWithEmailAndPassword, signInWithEmailAndPassword   };
