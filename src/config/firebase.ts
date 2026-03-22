import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfPO-haIfxOPeLZEcuTRwpAxDWWOflOsc",
  authDomain: "futsal-league-67ce9.firebaseapp.com",
  projectId: "futsal-league-67ce9",
  storageBucket: "futsal-league-67ce9.firebasestorage.app",
  messagingSenderId: "610277007826",
  appId: "1:610277007826:web:10c9b17f7229186c76e80b",
  measurementId: "G-SB1MCZNKSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firebase Auth
export const auth = getAuth(app);

export default app;
