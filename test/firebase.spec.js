import {
  addDoc, deleteDoc, updateDoc, getDoc,
} from 'firebase/firestore';
import {
  auth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,
} from 'firebase/auth';
import {
  signUp, signIn, loginGoogle, deletePost, savePost, updatePost, getPost,
} from '../src/fiberbase/firebase.js';

// ¿ porque el signUp se importa desde firebase.js y no desde auth.js donde esta mockeado?
// jest.mock('firebase/auth');
// jest.mock('firebase/firestore');

describe('signUp', () => {
  it('Debería retornar un objeto con la propiedad email', () => signUp('prueba1@gmail.com', '1234prueba').then((userCredential) => {
    expect(userCredential.user.email).toBe('prueba1@gmail.com');
  }));
});

it('debe llamar la funcion signUpWithEmailAndPassword', async () => {
  const testMail = 'falsomail@no.com';
  const testPass = '123456';
  const callback = jest.fn();
  await signUp(testMail, testPass, callback);
  expect(createUserWithEmailAndPassword).toHaveBeenCalled();
});

describe('signIn', () => {
  it('Debería retornar un objeto con la propiedad email', () => signIn('prueba2@gmail.com', '1234prueba').then((userCredential) => {
    expect(userCredential.user.email).toBe('prueba2@gmail.com');
  }));
});

describe('loginGoogle', () => {
  it('Debería poder ingresar con google', () => {
    const provider = new GoogleAuthProvider();
    loginGoogle(auth, provider).then(() => {
      expect(signInWithPopup).toHaveBeenCalledWith(auth, provider);
    });
  });
});

describe('deletePost', () => {
  it('Debería retornar que si borro el post', () => {
    deletePost('Mock id');
    expect(deleteDoc).toHaveBeenCalled();
  });
});

describe('savePost', () => {
  it('Debería de llamar la funcion que guarda el post', () => {
    savePost('postId');
    expect(addDoc).toHaveBeenCalled();
  });
});

describe('updatePost', () => {
  it('Debería de llamar la funcion que actualiza el post', () => {
    updatePost('postEdited');
    expect(updateDoc).toHaveBeenCalled();
  });
});

describe('getPost', () => {
  it('Debería de llamar la funcion que permite obtener un post', () => {
    getPost('obteniendoPost');
    expect(getDoc).toHaveBeenCalled();
  });
});
