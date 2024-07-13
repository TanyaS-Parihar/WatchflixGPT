//Then, initialize Firebase and begin using the SDKs for the products you'd like to use.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIFixBOtkTDVmHynSQHNUDphAyr6INW9o",
  authDomain: "https://watchflixgpt-8aa44.firebaseapp.com/__/auth/handler",
  projectId: "watchflixgpt-8aa44",
  storageBucket: "watchflixgpt-8aa44.appspot.com",
  messagingSenderId: "1011015647117",
  appId: "1:1011015647117:web:9f732ced036e1049afc7c4",
  measurementId: "G-XFXWLC3V6L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

// import { createClient } from "pexels";

// export const client = createClient(
//   "N8h8A6K2EapRtI87iPs4WNLnSKnz6QEKUwrXucqJMPW1p9ce3o3P4In8"
// );
