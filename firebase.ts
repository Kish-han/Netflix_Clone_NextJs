import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkNkLZTaAIBc7weJsBoNbdS84_7UlSRI8",
    authDomain: "netflix-clone-nextjs-65d8d.firebaseapp.com",
    projectId: "netflix-clone-nextjs-65d8d",
    storageBucket: "netflix-clone-nextjs-65d8d.appspot.com",
    messagingSenderId: "1010673492890",
    appId: "1:1010673492890:web:301f6a3de9c2c6cbbd1023"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }