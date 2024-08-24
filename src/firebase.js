// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGkLUfOWnKaD9TaGF-t4JEfpheqf4hSxU",
  authDomain: "todoapp-1f495.firebaseapp.com",
  projectId: "todoapp-1f495",
  storageBucket: "todoapp-1f495.appspot.com",
  messagingSenderId: "992746039539",
  appId: "1:992746039539:web:77bd6172a67ef413daef86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
