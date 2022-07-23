import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA2zS1UOf25L2KKpVzqEieAFm3g2wGVSVA",
  authDomain: "stardew-valley-eccommerce.firebaseapp.com",
  projectId: "stardew-valley-eccommerce",
  storageBucket: "stardew-valley-eccommerce.appspot.com",
  messagingSenderId: "225324667114",
  appId: "1:225324667114:web:6e5bcbd899288efbfa4793",
  measurementId: "G-KFYDEJKKJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// function to export the app
export default function iniFirebase() {
    return app;
}