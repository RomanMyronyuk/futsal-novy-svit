import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH74IpDNkNnYTt2oqTXvQ5HmzAgWb_c74",
  authDomain: "futsal-novy-svit.firebaseapp.com",
  projectId: "futsal-novy-svit",
  storageBucket: "futsal-novy-svit.firebasestorage.app",
  messagingSenderId: "545992571458",
  appId: "1:545992571458:web:a00e106844897e1e544bdb",
  measurementId: "G-Y1V25MSCBB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firebase Auth
export const auth = getAuth(app);

export default app;
