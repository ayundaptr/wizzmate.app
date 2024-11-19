// firebase-config.js
const { initializeApp } = require("firebase/app"); // Modular import
const {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} = require("firebase/auth"); // Modular import untuk auth

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi Firebase Auth
const auth = getAuth(app);

module.exports = {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
