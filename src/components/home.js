// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
// import { patita, animalestres } from '../imagenes/exportimages.js';

export const home = () => {
  const homeDiv = document.createElement('div');
  homeDiv.className = 'homeDiv';
  const logoDiv = document.createElement('div');
  logoDiv.className = 'logoDiv';
  const imageDiv = document.createElement('div');
  imageDiv.className = 'imageDiv';
  const buttonDiv = document.createElement('div');
  buttonDiv.className = 'buttonDiv';

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

  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');

  buttonRegister.textContent = 'Crear cuenta';
  buttonLogin.textContent = 'Ingresa';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  homeDiv.appendChild(logoDiv);
  homeDiv.appendChild(imageDiv);
  homeDiv.appendChild(buttonDiv);

  logoDiv.appendChild(footprint);
  logoDiv.appendChild(title);

  imageDiv.appendChild(animals);

  buttonDiv.appendChild(buttonRegister);
  buttonDiv.appendChild(pregunta);
  buttonDiv.appendChild(buttonLogin);
  buttonDiv.appendChild(googleStart);

  return homeDiv;
};
