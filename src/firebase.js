import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOoYnx25uVyO1OLX6NN0GFEKBnraq44u0",
  authDomain: "my-kmnewblog.firebaseapp.com",
  projectId: "my-kmnewblog",
  storageBucket: "my-kmnewblog.appspot.com",
  messagingSenderId: "1075542958628",
  appId: "1:1075542958628:web:84116c0f074036f2756eb1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
