// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAijVfO2Hb6YUvPx-NBxwD9cVwG6DuQnw8",
  authDomain: "stream-parish-demo.firebaseapp.com",
  projectId: "stream-parish-demo",
  storageBucket: "stream-parish-demo.firebasestorage.app",
  messagingSenderId: "116132718227",
  appId: "1:116132718227:web:d174f73718b7512e76cf66",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
