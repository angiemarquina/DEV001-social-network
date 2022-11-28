import { onNavigate } from '../main.js';
export const register = () => {
  const homeDiv = document.createElement('div');
  const footprint = document.createElement('img');
  footprint.src = './imagenes/patita.png';
  footprint.alt = 'la huella de una patita';
  footprint.className = 'footprint';
  const title = document.createElement('h1');
  title.textContent = 'CoHabita';
  title.className = 'title';
  const buttonHome = document.createElement('button');

  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  homeDiv.appendChild(footprint);
  homeDiv.appendChild(title);

  homeDiv.appendChild(buttonHome);

  return homeDiv;
};
