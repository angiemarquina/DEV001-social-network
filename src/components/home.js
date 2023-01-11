import { loginGoogle } from '../fiberbase/firebase.js';

// función home a través de la ruta muestra toda su funcionalidad
export const home = (onNavigate) => {
  // el main contiene los tres divs principales del home.
  const homeDiv = document.createElement('main');
  homeDiv.className = 'homeDiv';
  const logoDiv = document.createElement('div');
  logoDiv.className = 'logoDiv';
  const imageDiv = document.createElement('div');
  imageDiv.className = 'imageDiv';
  const buttonDiv = document.createElement('div');
  buttonDiv.className = 'buttonDiv';

  // Imagen del logo de cohabita
  const footprint = document.createElement('img');
  footprint.src = 'https://i.postimg.cc/tgpbL5Gb/logonaranja.png';
  footprint.alt = 'la huella de una patita';
  footprint.className = 'footprint';

  // Imagen animalitos
  const animals = document.createElement('img');
  animals.src = 'https://i.postimg.cc/bwV31YYt/animalestres.jpg';
  animals.alt = 'perro, gato y pajaro';
  animals.className = 'animals';

  const pregunta = document.createElement('p');
  pregunta.textContent = '¿Ya tienes cuenta?';

  const googleStart = document.createElement('p');
  googleStart.textContent = 'O inicia sesión con';

  // Boton de crear cuenta
  const buttonRegister = document.createElement('button');
  buttonRegister.className = 'buttonRegister';
  buttonRegister.textContent = 'Crear cuenta';
  // Evento click que nos lleva a Register.
  buttonRegister.addEventListener('click', () => onNavigate('/register'));

  // Boton Ingresa
  const buttonLogin = document.createElement('button');
  buttonLogin.className = 'buttonLogin';
  buttonLogin.textContent = 'Ingresa';
  // Evento click que nos lleva a login.
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  // Boton google, para logearse.
  const buttonLoginGoogle = document.createElement('button');
  buttonLoginGoogle.id = 'buttonLoginGoogle';
  buttonLoginGoogle.className = 'buttonLoginGoogle';
  buttonLoginGoogle.type = 'button';
  buttonLoginGoogle.textContent = 'Google';

  // Estamos metiendo el logo, la imgen y los botones al main.
  homeDiv.appendChild(logoDiv);
  homeDiv.appendChild(imageDiv);
  homeDiv.appendChild(buttonDiv);

  // Estamos metiendo el logo al div del logo
  logoDiv.appendChild(footprint);

  // Estamos metiendo la imagen al div de imagen
  imageDiv.appendChild(animals);

  // Estamos metiendo los botones al div de botones
  buttonDiv.appendChild(buttonRegister);
  buttonDiv.appendChild(pregunta);
  buttonDiv.appendChild(buttonLogin);
  buttonDiv.appendChild(googleStart);
  buttonDiv.appendChild(buttonLoginGoogle);

  // googleButton trae el boton google, mediante el id.
  const googleButton = buttonDiv.querySelector('#buttonLoginGoogle');
  // Evento click de googleButton que llama la función loginGoogle y retorna una promesa
  // Se ejecuta una promesa en LoginGoogle
  // La promesa espera las credeciales, y si estan te lleva al muro y si no lanza un error
  googleButton.addEventListener('click', () => {
    loginGoogle()
      .then((credentials) => {
        console.log(credentials, 'aqui estan las credentials, aprendamos');
        onNavigate('/muro');
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return homeDiv;
};
