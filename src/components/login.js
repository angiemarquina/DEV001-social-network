import { signIn } from '../fiberbase/firebase.js';

export const login = (onNavigate) => {
  const loginDiv = document.createElement('main');
  loginDiv.className = 'loginDiv';
  const logoDiv = document.createElement('div');
  logoDiv.className = 'logoDivViewTwo';
  const dataLoginDiv = document.createElement('div');
  dataLoginDiv.className = 'dataLoginDiv';
  const formLogin = document.createElement('form');
  formLogin.id = 'formL';
  formLogin.action = '';
  formLogin.className = 'formLogin';

  const footprint = document.createElement('img');
  footprint.src = './imagenes/logorosa.png';
  footprint.alt = 'la huella de una patita';
  footprint.className = 'footprint';

  const mail = document.createElement('input');
  mail.id = 'mailLogin';
  mail.className = 'mailViewTwo';
  mail.type = 'email';
  mail.placeholder = 'Correo';
  mail.addEventListener('input', () => {
    const emailMessage = document.querySelector('#spanMail');
    if (emailMessage.textContent !== '') {
      emailMessage.textContent = '';
    }
  });

  const spanMail = document.createElement('span');
  spanMail.id = 'spanMail';
  spanMail.className = 'spanMail';
  spanMail.textContent = '';

  const password = document.createElement('input');
  password.id = 'passwordL';
  password.className = 'passwordViewTwo';
  password.type = 'password';
  password.placeholder = 'Contraseña';
  password.addEventListener('input', () => {
    const passwordMessage = document.querySelector('#spanPassword');
    if (passwordMessage.textContent !== '') {
      passwordMessage.textContent = '';
    }
  });

  const spanPassword = document.createElement('span');
  spanPassword.id = 'spanPassword';
  spanPassword.className = 'spanPassword';
  spanPassword.textContent = '';

  const buttonLogin = document.createElement('button');
  buttonLogin.className = 'buttonLoginViewTwo';
  buttonLogin.type = 'submit';
  buttonLogin.textContent = 'Ingresa';

  const buttonHome = document.createElement('button');
  buttonHome.className = 'btnHomeViewTwo';
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  loginDiv.appendChild(logoDiv);
  loginDiv.appendChild(dataLoginDiv);
  dataLoginDiv.appendChild(formLogin);

  logoDiv.appendChild(footprint);

  formLogin.appendChild(mail);
  formLogin.appendChild(spanMail);
  formLogin.appendChild(password);
  formLogin.appendChild(spanPassword);
  formLogin.appendChild(buttonLogin);

  dataLoginDiv.appendChild(buttonHome);

  const signInForm = loginDiv.querySelector('#formL');
  signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailLogin = signInForm.mailLogin.value;
    const passwordLogin = signInForm.passwordL.value;

    signIn(emailLogin, passwordLogin)
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

        if (errorCode === 'auth/user-not-found') {
          spanMail.innerHTML = 'Registrate primero';
        } else if (errorCode === 'auth/wrong-password') {
          spanPassword.innerHTML = 'La contraseña es incorrecta';
        }
      });
  });
  return loginDiv;
};
