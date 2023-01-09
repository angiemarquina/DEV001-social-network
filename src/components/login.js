import { signIn } from '../fiberbase/firebase.js';

// función login a través de la ruta muestra toda su funcionalidad
export const login = (onNavigate) => {
  // Main contiene dos divs y el form de login.
  const loginDiv = document.createElement('main');
  loginDiv.className = 'loginDiv';
  const logoDiv = document.createElement('div');
  logoDiv.className = 'logoDivViewTwo';
  const dataLoginDiv = document.createElement('div');
  dataLoginDiv.className = 'dataLoginDiv';
  const formLogin = document.createElement('form');
  formLogin.id = 'formL';
  formLogin.action = '';
  formLogin.className = 'formLogin';

  // Imagen del logo
  const footprint = document.createElement('img');
  footprint.src = './imagenes/logorosa.png';
  footprint.alt = 'la huella de una patita';
  footprint.className = 'footprint';

  // input para que el usuario escriba su correo.
  const mail = document.createElement('input');
  mail.id = 'mailLogin';
  mail.className = 'mailViewTwo';
  mail.type = 'email';
  mail.placeholder = 'Correo';
  // Escucha el evento input del mail que si empieza a escribir en él, se borra el span que
  // contiene el aviso de error.
  mail.addEventListener('input', () => {
    const emailMessage = document.querySelector('#spanMail');
    if (emailMessage.textContent !== '') {
      emailMessage.textContent = '';
    }
  });

  // span para mostrar error en el mail.
  const spanMail = document.createElement('span');
  spanMail.id = 'spanMail';
  spanMail.className = 'spanMail';
  spanMail.textContent = '';

  // input para el password
  const password = document.createElement('input');
  password.id = 'passwordL';
  password.className = 'passwordViewTwo';
  password.type = 'password';
  password.placeholder = 'Contraseña';
  // Escucha el evento input del password que si empieza a escribir en él, se borra el span que
  // contiene el aviso de error.
  password.addEventListener('input', () => {
    const passwordMessage = document.querySelector('#spanPassword');
    if (passwordMessage.textContent !== '') {
      passwordMessage.textContent = '';
    }
  });

  // span para mostrar errores en el password.
  const spanPassword = document.createElement('span');
  spanPassword.id = 'spanPassword';
  spanPassword.className = 'spanPassword';
  spanPassword.textContent = '';

  // boton Ingresa de login.
  const buttonLogin = document.createElement('button');
  buttonLogin.className = 'buttonLoginViewTwo';
  buttonLogin.type = 'submit';
  buttonLogin.textContent = 'Ingresa';

  // boton para regresar al Home.
  const buttonHome = document.createElement('button');
  buttonHome.className = 'btnHomeViewTwo';
  buttonHome.textContent = 'Regresar al Home';
  // Evento click del boton home regresa al Home.
  buttonHome.addEventListener('click', () => onNavigate('/'));

  // Estamos metiendo el logo, y el div que tiene el formulario.
  loginDiv.appendChild(logoDiv);
  loginDiv.appendChild(dataLoginDiv);
  dataLoginDiv.appendChild(formLogin);
  logoDiv.appendChild(footprint);

  // Estamos metiendo al formulario mail,spanmail,password,spanpassword, y boton de login
  formLogin.appendChild(mail);
  formLogin.appendChild(spanMail);
  formLogin.appendChild(password);
  formLogin.appendChild(spanPassword);
  formLogin.appendChild(buttonLogin);

  // Estamos metiendo el boton Home.
  dataLoginDiv.appendChild(buttonHome);

  // Estamos declarando singinForm y asignando el formulario por id.
  const signInForm = loginDiv.querySelector('#formL');
  // Evento Submit del boton ingresa que esta en el form que llama la funcion SignIn,
  signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Guardar el valor de lo que el usuario escribió en mail y password.
    const emailLogin = signInForm.mailLogin.value;
    const passwordLogin = signInForm.passwordL.value;
    // sigIn se ejectua con los parametros emailLogin y passwordLogin y retorna una
    // promesa que llama al objeto user dentro del objeto userCredential y si está:
    // te lleva al muro y si no muestra los errores.

    signIn(emailLogin, passwordLogin)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        onNavigate('/muro');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorCode, errorMessage);

        if (errorCode === 'auth/user-not-found') {
          spanMail.innerHTML = 'Registrate primero';
        } else if (errorCode === 'auth/wrong-password') {
          spanPassword.innerHTML = 'La contraseña es incorrecta';
        }
      });
  });
  return loginDiv;
};
