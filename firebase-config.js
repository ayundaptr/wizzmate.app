const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyA0qW_TOwpOHKKo4wJqmT34SrxZn7zo_1s",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "capstone-backend-1cfba",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

module.exports = { auth };
