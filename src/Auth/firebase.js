
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDfFB7TfEf9jYUhoDORq5ToFL8yQBK2cfg",
  authDomain: "authenticationdemo-70a14.firebaseapp.com",
  projectId: "authenticationdemo-70a14",
  storageBucket: "authenticationdemo-70a14.appspot.com",
  messagingSenderId: "353545779278",
  appId: "1:353545779278:web:621896711315e888daeb1f",
  measurementId: "G-W3M73BHDTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
// const analytics = getAnalytics(app);