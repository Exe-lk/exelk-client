// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebase = {
    apiKey: "AIzaSyBzjLROTitaKWKSHensPPPLtzxFFmv3Pp4",
    authDomain: "exelk-b4185.firebaseapp.com",
    projectId: "exelk-b4185",
    storageBucket: "exelk-b4185.appspot.com",
    messagingSenderId: "746306393949",
    appId: "1:746306393949:web:4e326182f0b9d47764bab4",
    measurementId: "G-W7Z7Q3W3N7"
};
;

// Initialize Firebase
const app = initializeApp(firebase);
export const db = getFirestore(app); // Export Firestore instance