import { onNavigate } from '../main.js';
export const register = () => {
  const registerDiv = document.createElement('div');
  registerDiv.className = 'registerDiv';
  const logoDiv = document.createElement('div');
  logoDiv.className = 'logoDiv';
  const dataRegisterDiv = document.createElement('div');
  dataRegisterDiv.className = 'dataRegisterDiv';

  const footprint = document.createElement('img');
  footprint.src = './imagenes/patita.png';
  footprint.alt = 'la huella de una patita';
  footprint.className = 'footprint';
  const title = document.createElement('h1');
  title.textContent = 'CoHabita';
  title.className = 'title';
  const name = document.createElement('input');
  name.type = 'text';
  name.placeholder = 'Nombre';
  const mail = document.createElement('input');
  mail.type = 'email';
  mail.placeholder = 'Correo';
  const password = document.createElement('input');
  password.placeholder = 'Contraseña';
  password.type = 'password';
  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registar';
  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  registerDiv.appendChild(logoDiv);
  registerDiv.appendChild(dataRegisterDiv);

  logoDiv.appendChild(title);
  logoDiv.appendChild(footprint);

  dataRegisterDiv.appendChild(name);
  dataRegisterDiv.appendChild(mail);
  dataRegisterDiv.appendChild(password);
  dataRegisterDiv.appendChild(buttonRegister);
  dataRegisterDiv.appendChild(buttonHome);

  return registerDiv;
};
