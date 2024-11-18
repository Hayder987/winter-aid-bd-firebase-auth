
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_nCxb9xonIMv3F2hLeTuQR0wNLEHRRxA",
  authDomain: "winter-aid-bd.firebaseapp.com",
  projectId: "winter-aid-bd",
  storageBucket: "winter-aid-bd.firebasestorage.app",
  messagingSenderId: "610072786677",
  appId: "1:610072786677:web:2c76f2e054bad9986c37bc"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)