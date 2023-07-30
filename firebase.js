// Import the functions you need from the SDKs you need
import { initializeApp , getApp,getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxdHxTGrVhBP_s1wgsLcrlvioN9MEgnDQ",
  authDomain: "radoshop-7478b.firebaseapp.com",
  projectId: "radoshop-7478b",
  storageBucket: "radoshop-7478b.appspot.com",
  messagingSenderId: "361955310674",
  appId: "1:361955310674:web:b72dd98e625e6ea8d5b38b"
};

// Initialize Firebase
const app = !getApps().length? initializeApp(firebaseConfig):getApp();
const db=getFirestore();
const storage=getStorage();

export {app ,db,storage}