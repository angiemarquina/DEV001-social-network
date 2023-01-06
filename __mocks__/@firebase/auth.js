// FUNCIONES DE FIREBASE MOCKEADAS
export const createUserWithEmailAndPassword = jest.fn((auth, email, password) => Promise.resolve({
  user: { email },
}));

export const signInWithEmailAndPassword = jest.fn((auth, email, password) => Promise.resolve({
  user: { email },
}));

export const signInWithPopup = jest.fn((auth, provider) => Promise.resolve({
  provider,
}));

export const GoogleAuthProvider = jest.fn();
export const getAuth = jest.fn();
// export const analytics = jest.fn();
// export const onAuthStateChanged = jest.fn();
// export const onSnapshot = jest.fn();
// export const updateDoc = jest.fn();
// export const updateProfile = jest.fn();

console.log('estoy aquiiiiiiiiiiii feos mocks');
