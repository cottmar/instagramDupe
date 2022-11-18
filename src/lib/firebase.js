import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBh2B35KNCru8CoV48VEsJRYsB2ANb5Iv8",

    authDomain: "instagram-caragram.firebaseapp.com",
  
    projectId: "instagram-caragram",
  
    storageBucket: "instagram-caragram.appspot.com",
  
    messagingSenderId: "484194465157",
  
    appId: "1:484194465157:web:b5ef04f4623d3bb2cdc0ec"
  
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;


export { firebase, FieldValue };