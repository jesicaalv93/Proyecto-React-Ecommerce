// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyO8PZMLCob7Ofy00SMLGO5aeWofTcscY",
  authDomain: "ecommerce-latir.firebaseapp.com",
  projectId: "ecommerce-latir",
  storageBucket: "ecommerce-latir.firebasestorage.app",
  messagingSenderId: "863648865253",
  appId: "1:863648865253:web:4fe33b4bbcc1702c71ed0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Importar la instancia de Firestore
export const DB = getFirestore(app);