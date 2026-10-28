import { GoogleAIBackend } from "firebase/ai";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC1-8whIqVhl-zJR44zf1nvN4zdEATk3JY",
  authDomain: "simple-blog-bde4b.firebaseapp.com",
  projectId: "simple-blog-bde4b",
  storageBucket: "simple-blog-bde4b.firebasestorage.app",
  messagingSenderId: "537120848618",
  appId: "1:537120848618:web:7afd7bdd9b58a1ee64b593"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app); //認証
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
const db = getFirestore(app); //db取得

export{auth, provider, db};
