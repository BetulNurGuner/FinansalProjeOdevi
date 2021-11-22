// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
if(firebase.apps.length ==0){
    app=firebase.initializeApp(firebaseConfig);
}
else{
    app=firebase.app()
}

const auth=firebase.auth()
export {auth};