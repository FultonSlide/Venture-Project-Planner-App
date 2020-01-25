import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Venture's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD2hB5ahu1xfnceo0fMm9IqTUEEADOSbqo",
    authDomain: "venture-project-planner.firebaseapp.com",
    databaseURL: "https://venture-project-planner.firebaseio.com",
    projectId: "venture-project-planner",
    storageBucket: "venture-project-planner.appspot.com",
    messagingSenderId: "94449845740",
    appId: "1:94449845740:web:162b242d634e04d819acc9",
    measurementId: "G-3Y6W6VKCKS"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

export default firebase;