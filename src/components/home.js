// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import * as Allimages from '../imagenes/exportimages.js';

export const home = () => {
  const homeHeader = document.createElement('div');
  const footprint = document.createElement('img');
  footprint.src = Allimages.patita.png;
  footprint.alt = 'la huella de una patita';
  const title = document.createElement('h1');
  const animals = document.createElement('img');

  const homeDiv = document.createElement('div');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');

  buttonRegister.textContent = 'Crear cuenta';
  buttonLogin.textContent = 'Ingresa';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  homeHeader.appendChild(footprint);
  homeHeader.appendChild(title);
  homeHeader.appendChild(animals);

  homeDiv.appendChild(buttonRegister);
  homeDiv.appendChild(buttonLogin);

  return homeDiv;
};
