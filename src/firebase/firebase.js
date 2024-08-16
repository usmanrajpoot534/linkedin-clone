import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBdIQwhI2DVyUKrnSFG0A7tNrH7xBt3cBI",
    authDomain: "linkedin-clone-c7925.firebaseapp.com",
    projectId: "linkedin-clone-c7925",
    storageBucket: "linkedin-clone-c7925.appspot.com",
    messagingSenderId: "32950160909",
    appId: "1:32950160909:web:08aaa404dfc4f7ac01cf44"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth, db };

