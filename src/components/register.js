export const register = () => {
  const homeDiv = document.createElement('div');
  homeDiv.textContent = 'Registrate en Cohabita';
  const buttonHome = document.createElement('button');

  buttonHome.textContent = 'Regresar al Home';

  homeDiv.appendChild(buttonHome);

  return homeDiv;
};
