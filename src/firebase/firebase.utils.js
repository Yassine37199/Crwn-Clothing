import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDqeyIqBGZ0iNExgTzhRkQTRvvaDVwMLuY",
    authDomain: "crwn-db-e1190.firebaseapp.com",
    projectId: "crwn-db-e1190",
    storageBucket: "crwn-db-e1190.appspot.com",
    messagingSenderId: "109674058837",
    appId: "1:109674058837:web:3aa250d6f7eb6cf372b0dc",
    measurementId: "G-8QG02KKD18"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});


export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;