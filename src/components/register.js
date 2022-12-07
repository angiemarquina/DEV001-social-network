import { signUp } from '../fiberbase/firebase';

export const register = (onNavigate) => {
  const registerDiv = document.createElement('div');
  registerDiv.className = 'registerDiv';
  const logoDivViewThree = document.createElement('div');
  logoDivViewThree.className = 'logoDiv';
  const dataRegisterDiv = document.createElement('div');
  dataRegisterDiv.className = 'dataRegisterDiv';
  const formRegister = document.createElement('form');
  formRegister.id = 'formR';
  formRegister.action = '';

  const footprint = document.createElement('img');
  footprint.src = './imagenes/patitarosa.png';
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
  const password = document.createElement('input');
  password.placeholder = 'Contraseña';
  password.type = 'password';
  password.id = 'passwordRegister';
  password.className = 'password';
  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registar';
  buttonRegister.className = 'buttonRegister';
  buttonRegister.type = 'submit';
  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.className = 'buttonHome';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  registerDiv.appendChild(logoDivViewThree);
  registerDiv.appendChild(dataRegisterDiv);

  logoDivViewThree.appendChild(footprint);
  logoDivViewThree.appendChild(titleViewThree);

  dataRegisterDiv.appendChild(formRegister);
  formRegister.appendChild(name);
  formRegister.appendChild(mail);
  formRegister.appendChild(password);
  formRegister.appendChild(buttonRegister);

  // dataRegisterDiv.appendChild(name);
  // dataRegisterDiv.appendChild(mail);
  // dataRegisterDiv.appendChild(password);
  // dataRegisterDiv.appendChild(buttonRegister);
  dataRegisterDiv.appendChild(buttonHome);

  const signupRForm = registerDiv.querySelector('#formR');
  console.log(signupRForm);

  signupRForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameR = signupRForm.nameRegister.value;
    const registerR = signupRForm.mailRegister.value;
    const passwordR = signupRForm.passwordRegister.value;
    console.log(nameR, registerR, passwordR);

    signUp(mail, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  });
  return registerDiv;
};
