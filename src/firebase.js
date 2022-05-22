import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBdFxRvJdj73t4xES7CpEeKjoFOLC0J8G8",
    authDomain: "netflixclone-6d094.firebaseapp.com",
    projectId: "netflixclone-6d094",
    storageBucket: "netflixclone-6d094.appspot.com",
    messagingSenderId: "993982732013",
    appId: "1:993982732013:web:6c22a56046e4190d2e9ee4",
};

const app = initializeApp(firebaseConfig);
//const db = getFirestore();
const auth = getAuth();


export { auth };
// export default db;

// export function signUp (email, password){
//   return createUserWithEmailAndPassword(auth, email, password);
// }
