// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYZn21vO7bDyyqKOTYWD3dDMpJOuOknbs",
    authDomain: "personal-gym-trainer-61c76.firebaseapp.com",
    projectId: "personal-gym-trainer-61c76",
    storageBucket: "personal-gym-trainer-61c76.appspot.com",
    messagingSenderId: "919676700647",
    appId: "1:919676700647:web:12385a6ed63c6e0f241f42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
