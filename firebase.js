// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2vhmmSNxvC9i2AkA5ctxeQuJfYuTj3M",
  authDomain: "financely-rec.firebaseapp.com",
  projectId: "financely-rec",
  storageBucket: "financely-rec.appspot.com",
  messagingSenderId: "362566604024",
  appId: "1:362566604024:web:dad7220761d6fbdd55717d",
  measurementId: "G-TFE2W3D6WZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {db, auth, provider, doc, setDoc};