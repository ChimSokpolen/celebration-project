import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBC_83BjnixzcHZVZvJJJk0Ixr12lskzno",
  authDomain: "celebration-management-a8c16.firebaseapp.com",
  projectId: "celebration-management-a8c16",
  storageBucket: "celebration-management-a8c16.appspot.com",
  messagingSenderId: "580677770881",
  appId: "1:580677770881:web:8ca5a136a3c02c97e33780",
  measurementId: "G-4BSEW5ER4M"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);

// apiKey: "AIzaSyDJxZn_nSicvFFi0YMX-LTEeMqFUGF9ocw",
//   authDomain: "celebration-917d2.firebaseapp.com",
//   projectId: "celebration-917d2",
//   storageBucket: "celebration-917d2.appspot.com",
//   messagingSenderId: "920076480342",
//   appId: "1:920076480342:web:97baea92faf639f2a1b0f7",
//   measurementId: "G-RG5GSBD8E7"