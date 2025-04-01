import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDVsw57KDAmnhb25akK2WUuq9eUBK7CJa4",
    authDomain: "melodify-70d15.firebaseapp.com",
    projectId: "melodify-70d15",
    storageBucket: "melodify-70d15.firebasestorage.app",
    messagingSenderId: "344354828008",
    appId: "1:344354828008:web:ef0b857df2bcce1016235d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
