// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBo2ItilCH_KDpybpxPFpn0RYoeLQrPDjU",
    authDomain: "personal-gym-trainer-d5b35.firebaseapp.com",
    projectId: "personal-gym-trainer-d5b35",
    storageBucket: "personal-gym-trainer-d5b35.firebasestorage.app",
    messagingSenderId: "426452316368",
    appId: "1:426452316368:web:7cb2bbb9f854c644876ed5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
