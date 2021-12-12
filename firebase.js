// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import * as firebase from 'firebase/app';
//import 'firebase/firestore'
//import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//import { initializeApp } from 'firebase/app';
//import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
//firebase v9 dan sonra syntax değişmiş, eski syntax ı kullanmak için compat kullan.

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHuFdKpyZH2uqItv4EkAZcUEOlYln8UpI",
  authDomain: "mobilprojeauth.firebaseapp.com",
  projectId: "mobilprojeauth",
  storageBucket: "mobilprojeauth.appspot.com",
  messagingSenderId: "232408261521",
  appId: "1:232408261521:web:53101281c969101c783030"
};

// Initialize Firebase
let app;
if(firebase.apps.length ===0){
    app=firebase.initializeApp(firebaseConfig);
}
else{
    app=firebase.app()
}

const auth=firebase.auth()
export {auth};