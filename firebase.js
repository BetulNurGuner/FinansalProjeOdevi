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
  apiKey: "AIzaSyAoNowH07Y5MahMVa7GGQo19icY00s6fNs",
  authDomain: "finansalproje.firebaseapp.com",
  projectId: "finansalproje",
  storageBucket: "finansalproje.appspot.com",
  messagingSenderId: "908967575525",
  appId: "1:908967575525:web:95ddded2e934ad587b390c"
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