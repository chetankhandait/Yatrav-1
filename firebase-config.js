
import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app';
// import { GoogleAuthProvider } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-lVvH64PE0nJ5EZHXfGjzSoh8KkPDtuA",
    authDomain: "yatra-5feef.firebaseapp.com",
    databaseURL: "https://yatra-5feef-default-rtdb.firebaseio.com",
    projectId: "yatra-5feef",
    storageBucket: "yatra-5feef.appspot.com",
    messagingSenderId: "789274747055",
    appId: "1:789274747055:web:89dce8b11c78774a01345a"
};

const app = initializeApp(firebaseConfig);


export const firebaseAuth = getAuth(app);