// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4tw0dEATiLKgotdbTrdpdQdH8rU_mpB4",
  authDomain: "screenrecorder-6ddec.firebaseapp.com",
  projectId: "screenrecorder-6ddec",
  storageBucket: "screenrecorder-6ddec.appspot.com",
  messagingSenderId: "307195780812",
  appId: "1:307195780812:web:bd994780a168a33c842c69"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// export function to initialize firebase
export const initFirebase = () => {
    return app;
}