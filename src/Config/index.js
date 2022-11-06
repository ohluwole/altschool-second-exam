// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult, onAuthStateChanged, signOut} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIfsWFOx7reQ3a4ktVbwzU68_MmhbVCyI",
  authDomain: "react-router-auth-db352.firebaseapp.com",
  projectId: "react-router-auth-db352",
  storageBucket: "react-router-auth-db352.appspot.com",
  messagingSenderId: "1037532822848",
  appId: "1:1037532822848:web:6b7250462793e763c74ea5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth (app);
const Provider = new GoogleAuthProvider();

export {
    app,
    auth,
    Provider,
    signInWithRedirect,
    getRedirectResult,
    onAuthStateChanged,
    signOut
};
