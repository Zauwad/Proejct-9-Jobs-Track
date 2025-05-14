// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBshKaPFM3qF_JwRUIa4HnpymWirpKQ29c",
  authDomain: "job-track-fec79.firebaseapp.com",
  projectId: "job-track-fec79",
  storageBucket: "job-track-fec79.firebasestorage.app",
  messagingSenderId: "277565941478",
  appId: "1:277565941478:web:d6788ccf4c941971977d27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);