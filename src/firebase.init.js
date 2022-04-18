// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJKnuOLbudqtGhycvnLTlMer4kabdxtTo",
    authDomain: "men-s-gymnasium.firebaseapp.com",
    projectId: "men-s-gymnasium",
    storageBucket: "men-s-gymnasium.appspot.com",
    messagingSenderId: "471910627869",
    appId: "1:471910627869:web:31fe4702dd74e9233be4f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;