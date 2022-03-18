import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../servicdes/seed';

// import seed file
// import { seedDatabase } from '../seed';


const config = {
  apiKey: "AIzaSyAimucIqJ0jI70SDGh8XGkyKk1ZhoVmFq0",
  authDomain: "instagram-c92f7.firebaseapp.com",
  projectId: "instagram-c92f7",
  storageBucket: "instagram-c92f7.appspot.com",
  messagingSenderId: "540612807007",
  appId: "1:540612807007:web:25c3370332417f96118eea"
};
  
const firebase =Firebase.initializeApp(config);
const {FieldValue} = Firebase.firestore;

// call seed file only once 
// seedDatabase(firebase)
// seedDatabase(firebase)
console.log("firebase", firebase);

export {firebase, FieldValue}