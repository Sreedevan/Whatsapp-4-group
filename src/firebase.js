import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_bgHzSNfTT1NAQpcFNgmne-LhbGJJUJs",
  authDomain: "whatsapp-4-group-1cf3d.firebaseapp.com",
  projectId: "whatsapp-4-group-1cf3d",
  storageBucket: "whatsapp-4-group-1cf3d.appspot.com",
  messagingSenderId: "831027042259",
  appId: "1:831027042259:web:a5653a9b6868f081b14126",
  measurementId: "G-683HCTTLX3"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
