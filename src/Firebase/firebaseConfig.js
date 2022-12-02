// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-usvMIl6oh7F0JDj_6HXJrpxq-ToDR30",
  authDomain: "fir-typescript-f6d03.firebaseapp.com",
  projectId: "fir-typescript-f6d03",
  storageBucket: "fir-typescript-f6d03.appspot.com",
  messagingSenderId: "840724505400",
  appId: "1:840724505400:web:125dfc2373a30ad94bd7cd",
  measurementId: "G-N4B6006TPL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
