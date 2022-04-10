// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1gd3p-raJvnr1UfXSjJpCpLjcOhGtGcg",
  authDomain: "ema-john-simple-f9e88.firebaseapp.com",
  projectId: "ema-john-simple-f9e88",
  storageBucket: "ema-john-simple-f9e88.appspot.com",
  messagingSenderId: "956433391413",
  appId: "1:956433391413:web:148074c8810faebcd9f67c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
