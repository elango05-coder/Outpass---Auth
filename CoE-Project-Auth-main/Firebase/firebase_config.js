import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "your api  name",
  authDomain: "online-outpass.firebaseapp.com",
  projectId: "online-outpass",
  storageBucket: "online-outpass.firebasestorage.app",
  messagingSenderId: "255928719269",
  appId: "1:255928719269:web:cadbdb632a4dd82e333a4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { auth };
