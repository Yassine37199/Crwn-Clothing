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

export const createUserProfileDocument = async (userAuth , additionalData) => {

    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapshot = userRef.get();

    if(!(await snapshot).exists) {
        const {displayName , email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user' , error.message)
        }

        
    }
    
    return userRef;
    
} 



export const addCollectionAndDocs = async (collectionkey , objects) => {
    const collectionRef = firestore.collection(collectionkey);
    console.log(collectionRef);

    const batch = firestore.batch();
    objects.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef , obj);
    })

    await batch.commit()
}

export const convertCollectionSnapshotToMap = collectionSnapshot => {
    const transformedCollection = collectionSnapshot.docs.map(docSnapshot => {
        const {title , items} = docSnapshot.data();

        return {
            id : docSnapshot.id,
            title,
            items
        };
    });

    console.log(transformedCollection)

    return transformedCollection.reduce((acc , collection) => {
        acc[collection.title.toLowerCase()] = collection;
        return acc;
    } , {});
};




firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});



export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;