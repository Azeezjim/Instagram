import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../servicdes/seed';

// import seed file


const config = {};

const firebase =Firebase.initializeApp(config);

const {FieldValue} = Firebase.firestore;

// call seed file only once 
// seedDatabase(firebase)