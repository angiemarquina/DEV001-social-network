export const login = (onNavigate) => {
  const loginDiv = document.createElement('div');
  loginDiv.className = 'loginDiv';
  const logoDiv = document.createElement('div');
  logoDiv.className = 'logoDiv';
  const dataLoginDiv = document.createElement('div');
  dataLoginDiv.className = 'dataLoginDiv';

  const footprint = document.createElement('img');
  footprint.src = './imagenes/patita.png';
  footprint.alt = 'la huella de una patita';
  footprint.className = 'footprint';
  const title = document.createElement('h1');
  title.textContent = 'CoHabita';
  title.className = 'title';

  const mail = document.createElement('h3');
  mail.textContent = 'Correo';
  const password = document.createElement('h3');
  password.textContent = 'Contraseña';
  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Ingresa';
  const forgetPassword = document.createElement('p');
  forgetPassword.textContent = '¿Olvidaste tu contraseña? Click Aquí';

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  loginDiv.appendChild(logoDiv);
  loginDiv.appendChild(dataLoginDiv);

  logoDiv.appendChild(footprint);
  logoDiv.appendChild(title);

  dataLoginDiv.appendChild(mail);
  dataLoginDiv.appendChild(password);
  dataLoginDiv.appendChild(buttonLogin);
  dataLoginDiv.appendChild(forgetPassword);
  dataLoginDiv.appendChild(buttonHome);

  return loginDiv;
};
