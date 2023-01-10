import { updateProfile } from 'firebase/auth';
import { auth, signUp } from '../fiberbase/firebase';

export const register = (onNavigate) => {
  const registerDiv = document.createElement('main');
  registerDiv.className = 'registerDiv';
  const logoDivViewThree = document.createElement('div');
  logoDivViewThree.className = 'logoDiv';
  const dataRegisterDiv = document.createElement('div');
  dataRegisterDiv.className = 'dataRegisterDiv';
  const formRegister = document.createElement('form');
  formRegister.id = 'formR';
  formRegister.action = '';

  const footprint = document.createElement('img');
  footprint.src = './imagenes/logorosa.png';
  footprint.alt = 'la huella de una patita';
  footprint.className = 'footprint';

  const titleViewThree = document.createElement('h1');
  titleViewThree.textContent = 'CoHabita';
  titleViewThree.className = 'title';

  const name = document.createElement('input');
  name.type = 'text';
  name.id = 'nameRegister';
  name.placeholder = 'Nombre';
  name.className = 'name';

  const mail = document.createElement('input');
  mail.type = 'email';
  mail.id = 'mailRegister';
  mail.placeholder = 'Correo';
  mail.className = 'mail';
  mail.addEventListener('input', () => {
    const emailMessage = document.querySelector('#spanMail');
    if (emailMessage.textContent !== '') {
      emailMessage.textContent = '';
    }
  });

  const password = document.createElement('input');
  password.placeholder = 'Contraseña';
  password.type = 'password';
  password.id = 'passwordRegister';
  password.className = 'password';
  password.addEventListener('input', () => {
    const passwordMessage = document.querySelector('#spanPassword');
    if (passwordMessage.textContent !== '') {
      passwordMessage.textContent = '';
    }
  });

  const spanMail = document.createElement('span');
  spanMail.textContent = '';
  spanMail.className = 'spanMail';
  spanMail.id = 'spanMail';

  const spanPassword = document.createElement('span');
  spanPassword.textContent = '';
  spanPassword.className = 'spanPassword';
  spanPassword.id = 'spanPassword';

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registar';
  buttonRegister.className = 'buttonRegister';
  buttonRegister.type = 'submit';
  buttonRegister.id = 'buttonRegister';

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.className = 'buttonHome';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  registerDiv.appendChild(logoDivViewThree);
  registerDiv.appendChild(dataRegisterDiv);

  logoDivViewThree.appendChild(footprint);

  dataRegisterDiv.appendChild(formRegister);
  formRegister.appendChild(name);
  formRegister.appendChild(mail);
  formRegister.appendChild(spanMail);
  formRegister.appendChild(password);
  formRegister.appendChild(spanPassword);
  formRegister.appendChild(buttonRegister);

  dataRegisterDiv.appendChild(buttonHome);

  const signupRForm = registerDiv.querySelector('#formR');
  console.log(signupRForm);
  // x({x:"hola"})

  // const x = (e) => console.log()

  // signupRForm.addEventListener('submit', x)

  signupRForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameR = signupRForm.nameRegister.value;
    const registerR = signupRForm.mailRegister.value;
    const passwordR = signupRForm.passwordRegister.value;
    console.log(nameR, registerR, passwordR);

    auth.onAuthStateChanged((user) => {
      if (user) {
        // Updates the user attributes:
        updateProfile(user, { // <-- Update Method here
          displayName: nameR,
          photoURL: 'https://api.dicebear.com/5.x/bottts-neutral/svg',
        });
      }
    });
    // agregar un updateprofile en el then del signUp para el nombre y foto default
    signUp(registerR, passwordR)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        onNavigate('/muro');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorCode, errorMessage);

        if (errorCode === 'auth/email-already-in-use') {
          spanMail.innerHTML = 'Ese usuario ya fue registrado';
        } else if (errorCode === 'auth/invalid-email') {
          spanMail.innerHTML = 'Correo invalido';
        } else if (errorCode === 'auth/weak-password') {
          spanPassword.innerHTML = 'La contraseña debe tener mas de 6 caracteres';
        }
      });
  });
  return registerDiv;
};
