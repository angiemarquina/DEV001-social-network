// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDaDifKTTa5LXHbsSEuqG9AACBmLK--Cb0',
  authDomain: 'cohabita-16616.firebaseapp.com',
  projectId: 'cohabita-16616',
  storageBucket: 'cohabita-16616.appspot.com',
  messagingSenderId: '1013337542989',
  appId: '1:1013337542989:web:db916b46f48b758c33a704',
  measurementId: 'G-KXDBB151F2',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const loginGoogle = () => {
  const provider = new GoogleAuthProvider();
 return signInWithPopup(auth, provider);
};
