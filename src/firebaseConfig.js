import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFIT6RyqD9aNxepRi4cVyN4jl2kYEaZb8",
  authDomain: "dev-challenge-83191.firebaseapp.com",
  databaseURL: "https://dev-challenge-83191-default-rtdb.firebaseio.com",
  projectId: "dev-challenge-83191",
  storageBucket: "dev-challenge-83191.appspot.com",
  messagingSenderId: "511509836319",
  appId: "1:511509836319:web:3a2ab71e3ca55baec05b2a",
};

const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth();
export { auth };
