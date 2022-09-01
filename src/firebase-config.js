import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCil7NqCicffy-JzZ4RdVAFT-O9qVFYmLk",
  authDomain: "blog-61eae.firebaseapp.com",
  projectId: "blog-61eae",
  storageBucket: "blog-61eae.appspot.com",
  messagingSenderId: "586692351173",
  appId: "1:586692351173:web:3a1a6bc255a772afa44cac",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
