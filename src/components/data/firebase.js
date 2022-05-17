import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl7k97CInF-9gVWv7pyaYmSaV1iDFzQKQ",
  authDomain: "bd-sentry.firebaseapp.com",
  projectId: "bd-sentry",
  storageBucket: "bd-sentry.appspot.com",
  messagingSenderId: "811462548469",
  appId: "1:811462548469:web:aa72aa1a71d3bdf2f85ebc",
  measurementId: "G-H0K14P0YRN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {auth}