import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDl0jqgHWQColH3eSPDJ3SkP5GIeCEySdc",
  authDomain: "japword-eede3.firebaseapp.com",
  projectId: "japword-eede3",
  storageBucket: "japword-eede3.firebasestorage.app",
  messagingSenderId: "963765611396",
  appId: "1:963765611396:web:c66c8633eab23c83730bd1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
