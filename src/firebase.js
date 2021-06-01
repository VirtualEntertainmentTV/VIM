import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDV1SjHvSc4eRWhrgYlUWD4_lmIoimrypA",
    authDomain: "vim-6d98c.firebaseapp.com",
    projectId: "vim-6d98c",
    storageBucket: "vim-6d98c.appspot.com",
    messagingSenderId: "825815616551",
    appId: "1:825815616551:web:312387fac903148b62d202",
    measurementId: "G-1P5RNNF9CX",
  })
  .auth();
