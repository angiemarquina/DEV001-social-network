import { loginGoogle } from '../fiberbase/firebase.js';

export const home = (onNavigate) => {
  const homeDiv = document.createElement('main');
  homeDiv.className = 'homeDiv';
  const logoDiv = document.createElement('div');
  logoDiv.className = 'logoDiv';
  const imageDiv = document.createElement('div');
  imageDiv.className = 'imageDiv';
  const buttonDiv = document.createElement('div');
  buttonDiv.className = 'buttonDiv';

  const footprint = document.createElement('img');
  footprint.src = './imagenes/logonaranja.png';
  footprint.alt = 'la huella de una patita';
  footprint.className = 'footprint';

  const animals = document.createElement('img');
  animals.src = './imagenes/animalestres.jpg';
  animals.alt = 'perro, gato y pajaro';
  animals.className = 'animals';

  const pregunta = document.createElement('p');
  pregunta.textContent = '¿Ya tienes cuenta?';

  const googleStart = document.createElement('p');
  googleStart.textContent = 'O inicia sesión con';

  const buttonRegister = document.createElement('button');
  buttonRegister.className = 'buttonRegister';
  buttonRegister.textContent = 'Crear cuenta';
  buttonRegister.addEventListener('click', () => onNavigate('/register'));

  const buttonLogin = document.createElement('button');
  buttonLogin.className = 'buttonLogin';
  buttonLogin.textContent = 'Ingresa';
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  const buttonLoginGoogle = document.createElement('button');
  buttonLoginGoogle.id = 'buttonLoginGoogle';
  buttonLoginGoogle.className = 'buttonLoginGoogle';
  buttonLoginGoogle.type = 'button';
  buttonLoginGoogle.textContent = 'Google';

  homeDiv.appendChild(logoDiv);
  homeDiv.appendChild(imageDiv);
  homeDiv.appendChild(buttonDiv);

  logoDiv.appendChild(footprint);

  imageDiv.appendChild(animals);

  buttonDiv.appendChild(buttonRegister);
  buttonDiv.appendChild(pregunta);
  buttonDiv.appendChild(buttonLogin);
  buttonDiv.appendChild(googleStart);
  buttonDiv.appendChild(buttonLoginGoogle);

  const googleButton = buttonDiv.querySelector('#buttonLoginGoogle');

  googleButton.addEventListener('click', () => {
    loginGoogle()
      .then((credentials) => {
        console.log(credentials);
        onNavigate('/muro');
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return homeDiv;
};
