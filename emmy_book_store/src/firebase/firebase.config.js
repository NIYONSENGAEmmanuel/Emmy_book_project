// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCelo4YLYiHDmPjHL4FBWwO43wB3tRrJ9w",
  authDomain: "emmy-book-inventory.firebaseapp.com",
  projectId: "emmy-book-inventory",
  storageBucket: "emmy-book-inventory.firebasestorage.app",
  messagingSenderId: "12441967504",
  appId: "1:12441967504:web:77e3ceef0d5466edcaf115"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app