// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-3b1f4.firebaseapp.com",
  projectId: "mern-blog-3b1f4",
  storageBucket: "mern-blog-3b1f4.firebasestorage.app",
  messagingSenderId: "729035210985",
  appId: "1:729035210985:web:bdac5defdb5f4976daf078"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

