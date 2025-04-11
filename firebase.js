
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChC9-i7HfvmqWoPn_Dz8AHTTl1Ki8JwMc",
  authDomain: "collabstudy-51aec.firebaseapp.com",
  projectId: "collabstudy-51aec",
  storageBucket: "collabstudy-51aec.appspot.com",
  messagingSenderId: "987637580186",
  appId: "1:987637580186:web:7e0fb142dbcc4a2c477a23",
  measurementId: "G-ENKXG34W45"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
