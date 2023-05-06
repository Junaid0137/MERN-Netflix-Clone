// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc008-HkhsnNJqR3CCl1Eyj-8DAajrFaQ",
  authDomain: "netflix-clone-b4be3.firebaseapp.com",
  projectId: "netflix-clone-b4be3",
  storageBucket: "netflix-clone-b4be3.appspot.com",
  messagingSenderId: "807115417046",
  appId: "1:807115417046:web:bcdf2b1339fc789e533077",
  measurementId: "G-M1J7XZZF3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);