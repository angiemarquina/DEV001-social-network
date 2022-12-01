export const register = (onNavigate) => {
  const registerDiv = document.createElement('div');
  registerDiv.className = 'registerDiv';
  const logoDivViewThree = document.createElement('div');
  logoDivViewThree.className = 'logoDiv';
  const dataRegisterDiv = document.createElement('div');
  dataRegisterDiv.className = 'dataRegisterDiv';

  const footprint = document.createElement('img');
  footprint.src = './imagenes/patitarosa.png';
  footprint.alt = 'la huella de una patita';
  footprint.className = 'footprint';
  const titleViewThree = document.createElement('h1');
  titleViewThree.textContent = 'CoHabita';
  titleViewThree.className = 'title';
  const name = document.createElement('input');
  name.type = 'text';
  name.placeholder = 'Nombre';
  name.className = 'name';
  const mail = document.createElement('input');
  mail.type = 'email';
  mail.placeholder = 'Correo';
  mail.className = 'mail';
  const password = document.createElement('input');
  password.placeholder = 'Contraseña';
  password.type = 'password';
  password.className = 'password';
  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registar';
  buttonRegister.className = 'buttonRegister';
  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.className = 'buttonHome';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  registerDiv.appendChild(logoDivViewThree);
  registerDiv.appendChild(dataRegisterDiv);

  logoDivViewThree.appendChild(footprint);
  logoDivViewThree.appendChild(titleViewThree);

  dataRegisterDiv.appendChild(name);
  dataRegisterDiv.appendChild(mail);
  dataRegisterDiv.appendChild(password);
  dataRegisterDiv.appendChild(buttonRegister);
  dataRegisterDiv.appendChild(buttonHome);

  return registerDiv;
};
