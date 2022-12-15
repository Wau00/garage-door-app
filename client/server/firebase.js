// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDvLYJs-EF8blbHVH_-VqOBzTdA9vB0Qeg",
    authDomain: "carportv1.firebaseapp.com",
    projectId: "carportv1",
    storageBucket: "carportv1.appspot.com",
    messagingSenderId: "153597717003",
    appId: "1:153597717003:web:2136145ff66a1e89b9f50e",
    measurementId: "G-ETXXM6QSCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);