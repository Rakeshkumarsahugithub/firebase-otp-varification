// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj2AKOJK7jwHcnqSI-ISOIDPd4Qkk_Tag",
  authDomain: "video-content-creation.firebaseapp.com",
  projectId: "video-content-creation",
  storageBucket: "video-content-creation.firebasestorage.app",
  messagingSenderId: "296836377441",
  appId: "1:296836377441:web:5dcdfd7b644e09181eb320",
  measurementId: "G-J0QN4LST68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

