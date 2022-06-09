// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwPcakD6c7HLyMfKMSkBCfCqvAq4KTbk8",
  authDomain: "reactpiw.firebaseapp.com",
  projectId: "reactpiw",
  storageBucket: "reactpiw.appspot.com",
  messagingSenderId: "484962157687",
  appId: "1:484962157687:web:673cedd5f59ab8647d3272",
  measurementId: "G-QL03096H46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const firestore = getFirestore(app);