import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Uncomment this to import seed file and call it only once on line 21
// import { seedDatabase } from '../seed';
// Firebase db configuration
const config = {
  apiKey: "AIzaSyCCv9xQoV-31raKnV9EY_XMlzAuFtdJ4Do",
  authDomain: "insta-clone2-41c5a.firebaseapp.com",
  projectId: "insta-clone2-41c5a",
  storageBucket: "insta-clone2-41c5a.appspot.com",
  messagingSenderId: "605609289848",
  appId: "1:605609289848:web:9879f21e344de92954a58d",
  measurementId: "G-FQCPCVQ555"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// Uncomment to call this function ONLY ONCE to seed the db then comment it back.
// seedDatabase(firebase);

export { firebase, FieldValue };