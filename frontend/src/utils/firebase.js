// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "thinkflow-ae152.firebaseapp.com",
    projectId: "thinkflow-ae152",
    storageBucket: "thinkflow-ae152.firebasestorage.app",
    messagingSenderId: "856130167608",
    appId: "1:856130167608:web:c66dd620a34289f14517cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()