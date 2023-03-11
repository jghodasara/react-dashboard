import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBJ3P-cPgvTwe3e6X7R8kH45ccQ4aVk7Ks",
  authDomain: "react-dashboard-e84bf.firebaseapp.com",
  projectId: "react-dashboard-e84bf",
  storageBucket: "react-dashboard-e84bf.appspot.com",
  messagingSenderId: "116407678299",
  appId: "1:116407678299:web:dab8922a4fe44a1cfb567e",
};


const app = initializeApp(firebaseConfig); // Here we are initializing the firebase
const auth = getAuth(app);
const db = getFirestore(app);

// The below function checks the users entered credentials and authenticates the user and shows error whenever necessary
const logInWithEmailAndPassword = async (email, password) => {
  try {
    let response = await signInWithEmailAndPassword(auth, email, password);
    console.log("LOGIN", response);
    localStorage.setItem("uid", response.user.uid);
    return true;
  } catch (err) {
    console.error(err.code);
    if (err.code === "auth/wrong-password") {
      alert("Password is incorrect");
    } else if (err.code === "auth/user-not-found") {
      alert(
        "No user found with this credentials. Please register to access the dashboard"
      );
    }

    return false;
  }
};


// The below function creates the users account and also creates a document in the firestore with the users all information
const registerWithEmailAndPassword = async (
  firstName,
  lastName,
  gender,
  email,
  password
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    localStorage.setItem("uid", user.uid);
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      firstName,
      lastName,
      gender,
      email,
      password,
    });
    return true;
  } catch (err) {
    console.error(err.code);
    if (err.code === "auth/email-already-in-use") {
      alert(
        "This email address is already in use. Please register with a different email"
      );
    }
    return false;
  }
};

export { auth, db, logInWithEmailAndPassword, registerWithEmailAndPassword };
