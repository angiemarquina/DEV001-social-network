export const login = (onNavigate) => {
  const loginDiv = document.createElement('div');
  loginDiv.className = 'loginDiv';
  const footprintDivTwo = document.createElement('div');
  footprintDivTwo.className = 'footprintDiv';
  const logoDiv = document.createElement('div');
  logoDiv.className = 'logoDivViewTwo';
  const dataLoginDiv = document.createElement('div');
  dataLoginDiv.className = 'dataLoginDiv';

  const footprint = document.createElement('img');
  footprint.src = './imagenes/patita2.png';
  footprint.alt = 'la huella de una patita';
  footprint.className = 'footprint';

  const title = document.createElement('h1');
  title.textContent = 'CoHabita';
  title.className = 'title';

  const mail = document.createElement('input');
  mail.type = 'email';
  mail.placeholder = 'Correo';
  mail.className = 'mailViewTwo';
  const password = document.createElement('input');
  password.type = 'password';
  password.placeholder = 'Contraseña';
  password.className = 'passwordViewTwo';
  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Ingresa';
  buttonLogin.className = 'buttonLoginViewTwo';
  const forgetPassword = document.createElement('p');
  forgetPassword.className = 'forgetPaswordTwo';
  forgetPassword.textContent = '¿Olvidaste tu contraseña? Click Aquí';

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.className = 'btnHomeViewTwo';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  loginDiv.appendChild(footprintDivTwo);
  loginDiv.appendChild(logoDiv);
  loginDiv.appendChild(dataLoginDiv);

  footprintDivTwo.appendChild(footprint);

  logoDiv.appendChild(title);

  dataLoginDiv.appendChild(mail);
  dataLoginDiv.appendChild(password);
  dataLoginDiv.appendChild(buttonLogin);
  dataLoginDiv.appendChild(forgetPassword);
  dataLoginDiv.appendChild(buttonHome);

  return loginDiv;
};
