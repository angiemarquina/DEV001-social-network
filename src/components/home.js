// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
// import { patita, animalestres } from '../imagenes/exportimages.js';

export const home = () => {
  const footprint = document.createElement('img');
  footprint.src = './imagenes/patita.png';
  footprint.alt = 'la huella de una patita';
  footprint.className = 'footprint';
  const title = document.createElement('h1');
  title.textContent = 'CoHabita';
  title.className = 'title';
  const animals = document.createElement('img');
  animals.className = 'animals';
  animals.src = './imagenes/animalestres.jpg';
  animals.alt = 'perro, gato y pajaro';
  const pregunta = document.createElement('p');
  pregunta.textContent = '¿Ya tienes cuenta?';
  const googleStart = document.createElement('p');
  googleStart.textContent = 'O inicia sesión con';

  const homeDiv = document.createElement('div');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');

  buttonRegister.textContent = 'Crear cuenta';
  buttonLogin.textContent = 'Ingresa';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  homeDiv.appendChild(footprint);
  homeDiv.appendChild(title);
  homeDiv.appendChild(animals);

  homeDiv.appendChild(buttonRegister);
  homeDiv.appendChild(pregunta);
  homeDiv.appendChild(buttonLogin);
  homeDiv.appendChild(googleStart);

  return homeDiv;
};
