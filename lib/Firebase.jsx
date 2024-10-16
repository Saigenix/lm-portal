// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg6edjzCm9pj9P1_K853g9dX9daAWTEuU",
  authDomain: "journal-967ba.firebaseapp.com",
  projectId: "journal-967ba",
  storageBucket: "journal-967ba.appspot.com",
  messagingSenderId: "359106193753",
  appId: "1:359106193753:web:df735926a23b2f24d14448",
  measurementId: "G-RFVGYRBLNL"
};

// Initialize Firebase

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Get a non-default Storage bucket
export const storage = getStorage(app);

export const provider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);

