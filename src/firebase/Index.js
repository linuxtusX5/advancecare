import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBV4HWVrQj81pqEBLhRNQKQoomSH0WpN_Q",
  authDomain: "advancecare-df8a9.firebaseapp.com",
  projectId: "advancecare-df8a9",
  storageBucket: "advancecare-df8a9.appspot.com",
  messagingSenderId: "547007971237",
  appId: "1:547007971237:web:817e973436da27a047b24c",
  measurementId: "G-H7GR37QQ4V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
export const db = firebaseApp.firestore();

//for storage
const storage = firebase.storage();
export { storage, firebase as default };

//for email
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
