// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
    getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBdEjtNQH_0AG9CSxy7OCh-leMAuqloImc",
    authDomain: "signup-and-login-9ecd0.firebaseapp.com",
    projectId: "signup-and-login-9ecd0",
    storageBucket: "signup-and-login-9ecd0.appspot.com",
    messagingSenderId: "968556932114",
    appId: "1:968556932114:web:eaf71deb6c17d61362fccb",
    measurementId: "G-X7TJT8H4KB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
};