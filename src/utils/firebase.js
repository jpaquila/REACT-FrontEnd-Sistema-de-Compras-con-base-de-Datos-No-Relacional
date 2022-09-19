import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmGToBcsaWsxld-ubG6Cv3E-hmPX2eXN4",
    authDomain: "react-aquila.firebaseapp.com",
    projectId: "react-aquila",
    storageBucket: "react-aquila.appspot.com",
    messagingSenderId: "895932171381",
    appId: "1:895932171381:web:5485c869b7f630b580243c"
};

// Conexión
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);