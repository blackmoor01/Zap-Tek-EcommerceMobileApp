// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat";// I used compat because of the version of the firebase
import 'firebase/auth';
import 'firebase/database'








const firebaseConfig = {
  // Your config options here
  apiKey: "AIzaSyA79xAFsBk-180CYybDMMx_KVfzvmoyJIs",
  authDomain: "zapteksignin.firebaseapp.com",
  projectId: "zapteksignin",
  storageBucket: "zapteksignin.appspot.com",
  messagingSenderId: "79608993528",
  appId: "1:79608993528:web:9a6554ce56fc727bc5cd0d",
  measurementId: "G-XF9E5T97TE"
};

// Initialize Firebase
let app;
//a conditional statement to check whether there is no  firebase configuration, if there is none, we initialize it with the else statement.
if (firebase.apps.length === 0){
     app = firebase.initializeApp(firebaseConfig);
}
else{
    app = firebase.app()
}

//store the authentication details in a conatiner auth and export.
const auth = firebase.auth()








export {firebase,auth};
