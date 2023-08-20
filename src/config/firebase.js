// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth";
// import {getFirestore} from "firebase/firestore"
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBFsXb49565BqxWOD6WtPIj2o5Y7nTeZS8",
//   authDomain: "fir-51b0f.firebaseapp.com",
//   projectId: "fir-51b0f",
//   storageBucket: "fir-51b0f.appspot.com",
//   messagingSenderId: "104481342746",
//   appId: "1:104481342746:web:b2bb092f48c455008a18a3",
//   measurementId: "G-SHC5W28VHE"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth=getAuth(app); 
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBE35GvFrZ5sGTZFp_oqf1gGsZK7ECIfr4",
  authDomain: "fir-abfcb.firebaseapp.com",
  projectId: "fir-abfcb",
  storageBucket: "fir-abfcb.appspot.com",
  messagingSenderId: "611906372852",
  appId: "1:611906372852:web:6e365df425319b24c7caa1",
  measurementId: "G-P9C7HJ3THS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth=getAuth(app);
