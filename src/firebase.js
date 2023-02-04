import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC8gN9WboUl3UCEm3lVEC6vY9tqmWxa5S0",
    authDomain: "slack-clone-b4dad.firebaseapp.com",
    projectId: "slack-clone-b4dad",
    storageBucket: "slack-clone-b4dad.appspot.com",
    messagingSenderId: "1082273691646",
    appId: "1:1082273691646:web:c92997266b67a38abf32af",
    measurementId: "G-FS0L2FHMCH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider(); 
  
  export { auth, provider };
  export default db;
