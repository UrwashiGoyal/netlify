// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChp5RcCQ15cQTg0enszH9Bm8cann7awxE",
  authDomain: "task7-9f070.firebaseapp.com",
  projectId: "task7-9f070",
  storageBucket: "task7-9f070.firebasestorage.app",
  messagingSenderId: "56278653597",
  appId: "1:56278653597:web:b02753ae7e25e283169274"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Auth instance
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db=getFirestore(app);