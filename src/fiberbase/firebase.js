// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  query,
  orderBy,
} from 'firebase/firestore';

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

// Inicializa Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);

// Autentica Firebase
export const auth = getAuth(app);

export const currentUser = () => auth.currentUser;

export const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);
// Autentica mediante singInWithPopup google
export const loginGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};
export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const logOut = () => signOut(auth);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const savePost = (postConteiner, userUid, profilePhoto, userName, emailUser, date) => {
  addDoc(collection(db, 'posts'), {
    postConteiner,
    userUid,
    profilePhoto,
    // profilePhoto: auth.currentUser.photoURL,
    userName,
    emailUser,
    date,
  });
};

export const onGetPosts = (callback) => {
  const queryPost = query(collection(db, 'posts'), orderBy('date', 'desc'));
  onSnapshot(queryPost, callback);
};

export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));
export const getPost = (id) => getDoc(doc(db, 'posts', id));
export const updatePost = (id, newFields) => updateDoc(doc(db, 'posts', id), newFields);
