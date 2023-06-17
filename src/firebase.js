// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKllLfvlYtGtwubI7kNLoMAIlbUXPEqJM",
  authDomain: "cart2-98497.firebaseapp.com",
  projectId: "cart2-98497",
  storageBucket: "cart2-98497.appspot.com",
  messagingSenderId: "446899250758",
  appId: "1:446899250758:web:e53a23da43d9708cd4cc47"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);




