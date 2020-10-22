import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAmwZsOXNjHAxEBgwrtziXqXyCrKuFoMj4",
  authDomain: "clone-app-17aa0.firebaseapp.com",
  databaseURL: "https://clone-app-17aa0.firebaseio.com",
  projectId: "clone-app-17aa0",
  storageBucket: "clone-app-17aa0.appspot.com",
  messagingSenderId: "1056240998744",
  appId: "1:1056240998744:web:0beeb3d7427f844445ed2d",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
