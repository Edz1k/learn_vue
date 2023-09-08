// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQHSBTFOeBP1YjT2LUWrYyAeF0VGhG-FM",
  authDomain: "learnvue-94281.firebaseapp.com",
  projectId: "learnvue-94281",
  storageBucket: "learnvue-94281.appspot.com",
  messagingSenderId: "678636676315",
  appId: "1:678636676315:web:4428134bc1b3059e6158fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }