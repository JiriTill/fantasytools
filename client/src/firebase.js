// client/src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // We’ll use Firestore
// import { getAnalytics } from "firebase/analytics"; // optional, only works in browser environments

const firebaseConfig = {
  apiKey: "AIzaSyDtlOqipfWFofMcSwCNgr52BSTfx9V827E",
  authDomain: "fantasytools-a06dd.firebaseapp.com",
  projectId: "fantasytools-a06dd",
  storageBucket: "fantasytools-a06dd.appspot.com", // fixed typo here
  messagingSenderId: "311635849788",
  appId: "1:311635849788:web:72b832ab7484f1bb764939",
  measurementId: "G-2FW4GQGTXX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional: Only works if you're running in a browser with window object
// const analytics = getAnalytics(app);

// Export Firestore database
import { getAnalytics } from "firebase/analytics";
const db = getFirestore(app);
export default db;
