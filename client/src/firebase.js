// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDtlOqipfWFofMcSwCNgr52BSTfx9V827E",
  authDomain: "fantasytools-a06dd.firebaseapp.com",
  projectId: "fantasytools-a06dd",
  storageBucket: "fantasytools-a06dd.appspot.com", // fix typo: should be ".appspot.com"
  messagingSenderId: "311635849788",
  appId: "1:311635849788:web:72b832ab7484f1bb764939",
  measurementId: "G-2FW4GQGTXX"
};

const app = initializeApp(firebaseConfig);

// 👇 THIS is what was missing
export const db = getFirestore(app);
