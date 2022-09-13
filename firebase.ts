// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkNkLZTaAIBc7weJsBoNbdS84_7UlSRI8",
  authDomain: "netflix-clone-nextjs-65d8d.firebaseapp.com",
  projectId: "netflix-clone-nextjs-65d8d",
  storageBucket: "netflix-clone-nextjs-65d8d.appspot.com",
  messagingSenderId: "1010673492890",
  appId: "1:1010673492890:web:301f6a3de9c2c6cbbd1023"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
