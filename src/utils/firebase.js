// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "ritzio.firebaseapp.com",
  projectId: "ritzio",
  storageBucket: "ritzio.appspot.com",
  messagingSenderId: "254366560992",
  appId: "1:254366560992:web:5f3193c7492b7efb655685"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);