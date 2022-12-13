import { signIn, auth } from '../fiberbase/firebase.js';

export const login = (onNavigate) => {
  const loginDiv = document.createElement('div');
  loginDiv.className = 'loginDiv';
  const footprintDivTwo = document.createElement('div');
  footprintDivTwo.className = 'footprintDiv';
  const logoDiv = document.createElement('div');
  logoDiv.className = 'logoDivViewTwo';
  const dataLoginDiv = document.createElement('div');
  dataLoginDiv.className = 'dataLoginDiv';
  const formLogin = document.createElement('form');
  formLogin.id = 'formL';
  formLogin.action = '';
  formLogin.className = 'formLogin';

  const footprint = document.createElement('img');
  footprint.src = './imagenes/patita2.png';
  footprint.alt = 'la huella de una patita';
  footprint.className = 'footprint';

  const title = document.createElement('h1');
  title.textContent = 'CoHabita';
  title.className = 'title';

  const mail = document.createElement('input');
  mail.type = 'email';
  mail.placeholder = 'Correo';
  mail.className = 'mailViewTwo';
  mail.id = 'mailLogin';

  const password = document.createElement('input');
  password.type = 'password';
  password.placeholder = 'Contraseña';
  password.className = 'passwordViewTwo';
  password.id = 'passwordL';

  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Ingresa';
  buttonLogin.className = 'buttonLoginViewTwo';
  const forgetPassword = document.createElement('p');
  forgetPassword.className = 'forgetPaswordTwo';
  forgetPassword.textContent = '¿Olvidaste tu contraseña? Click Aquí';

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.className = 'btnHomeViewTwo';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  loginDiv.appendChild(footprintDivTwo);
  loginDiv.appendChild(logoDiv);
  loginDiv.appendChild(dataLoginDiv);
  dataLoginDiv.appendChild(formLogin);
  footprintDivTwo.appendChild(footprint);

  logoDiv.appendChild(title);

  formLogin.appendChild(mail);
  formLogin.appendChild(password);
  formLogin.appendChild(buttonLogin);
  formLogin.appendChild(forgetPassword);
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
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorCode, errorMessage);
      });
  });
  return loginDiv;
};
