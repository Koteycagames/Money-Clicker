// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDIvQJkb5-WMyAjeqmpx2tUxODxMYUXATc",
  authDomain: "money-clicker-9fadc.firebaseapp.com",
  projectId: "money-clicker-9fadc",
  storageBucket: "money-clicker-9fadc.firebasestorage.app",
  messagingSenderId: "834982283678",
  appId: "1:834982283678:web:f4467056425d8861e5ee8f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
