import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB7zgJbdosiwrjCxKCx6rdWH9RRqGZSwSs",
  authDomain: "gcchat-62263.firebaseapp.com",
  projectId: "gcchat-62263",
  storageBucket: "gcchat-62263.appspot.com",
  messagingSenderId: "511142095704",
  appId: "1:511142095704:web:8740e50975de959840132d",
  measurementId: "G-0JZTB2NK40"
};

const app = initializeApp(firebaseConfig);


export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB7zgJbdosiwrjCxKCx6rdWH9RRqGZSwSs",
//   authDomain: "gcchat-62263.firebaseapp.com",
//   projectId: "gcchat-62263",
//   storageBucket: "gcchat-62263.appspot.com",
//   messagingSenderId: "511142095704",
//   appId: "1:511142095704:web:8740e50975de959840132d",
//   measurementId: "G-0JZTB2NK40"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);