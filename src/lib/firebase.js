import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { seedDatabase } from '../seed'

const config = {
    apiKey: "AIzaSyCJXSQZfGUVsCX8EtYFqCvMiqmgS-pkYpw",
    authDomain: "instagram-3da26.firebaseapp.com",
    projectId: "instagram-3da26",
    storageBucket: "instagram-3da26.appspot.com",
    messagingSenderId: "172874044661",
    appId: "1:172874044661:web:c0583b5f36796fe772e1bc"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;
seedDatabase(firebase);

export { firebase, FieldValue};