import { async } from 'regenerator-runtime';
import { connectFirestoreEmulator } from 'firebase/firestore';
import {
  saveTask, onGetTasks, deleteTask, getTask, updateTask, logOut, currentUser,
} from '../fiberbase/firebase.js';

export const muro = (onNavigate) => {
  const muroDiv = document.createElement('main');
  muroDiv.className = 'muroDiv';
  const muroLogoDiv = document.createElement('div');
  muroLogoDiv.className = 'muroLogoDiv';
  const muroPostsDiv = document.createElement('div');
  muroPostsDiv.className = 'muroPostsDiv';
  const iconsPostDiv = document.createElement('div');
  iconsPostDiv.className = 'iconsPostDiv';

  const footprint = document.createElement('img');
  footprint.src = './imagenes/logonaranja.png';
  footprint.alt = 'la huella de una patita';
  footprint.className = 'footprint';

  const formPost = document.createElement('form');
  formPost.id = 'formPost';

  const posts = document.createElement('textarea');
  posts.placeholder = 'Agrega un post...';
  posts.className = 'posts';
  posts.id = 'posts';

  const buttonToPost = document.createElement('button');
  buttonToPost.id = 'buttonToPost';
  buttonToPost.className = 'buttonToPost';
  buttonToPost.textContent = 'Publicar';

  const taskDiv = document.createElement('div');
  taskDiv.id = 'taskDiv';

  const buttonLogout = document.createElement('button');
  buttonLogout.id = 'buttonLogout';
  buttonLogout.textContent = 'Log out';
  buttonLogout.className = 'buttonLogout';
  // buttonHome.addEventListener('click', () => onNavigate('/'));

  muroDiv.appendChild(muroLogoDiv);
  muroDiv.appendChild(formPost);

  muroLogoDiv.appendChild(footprint);

  formPost.appendChild(muroPostsDiv);
  muroPostsDiv.appendChild(posts);
  muroPostsDiv.appendChild(iconsPostDiv);
  iconsPostDiv.appendChild(buttonToPost);

  muroDiv.appendChild(taskDiv);
  muroDiv.appendChild(buttonLogout);

  const taskConteiner = muroDiv.querySelector('#taskDiv');
  const taskForm = muroDiv.querySelector('#formPost');
  let editStatus = false;
  let id = '';

  // PERMITE QUE SE REALICEN LAS TAREAS Y LAS FUNCIONES
  window.addEventListener('DOMContentLoaded', async () => {
    onGetTasks((querySnapshot) => {
      let html = '';

      querySnapshot.forEach((doc) => {
        const dataPost = doc.data();
        const time = dataPost.date.seconds;
        const datePost = new Date(time * 1000);
        if (dataPost.uid === currentUser().uid) {
          html += `
            <div class = 'publicaciones'>
              <p>${dataPost.postConteiner}</p>
              <p> ${datePost}</p>
              <div class = 'contenedorIcons'>
                <img src='./imagenes/edit_icon.png' class='img-edit' data-id='${doc.id}'>
                <img src='./imagenes/trash_icon.png' class='img-delete' data-id='${doc.id}'>
              </div>
            </div>
          `;
        } else {
          html += `
            <div class = 'publicaciones'>
              <p>${dataPost.postConteiner}</p>
              <p> ${datePost}</p>
            </div>
          `;
        }
      });

      taskConteiner.innerHTML = html;

      // MANDA A LLAMAR LA IMG CORAZÓN Y LUEGO PERMITE LIKEAR
      // const btnsLike = taskConteiner.querySelectorAll('img-like');
      // btnsLike.forEach((btn) => {
      // btn.addEventListener('click', (e) => {
      //     const idLike = await getTask(e.target.dataset.id);
      //     idLike.then((res) => {
      //       const likes = res.data();
      //       if (likes.length === 0) {
      //         likes.push((currentUser().email));
      //       } else if (!likes.includes(currentUser().email)) {
      //         likes.push((currentUser().email));
      //       } else {
      //         likes = likes.filter((email) => !email.includes(currentUser().email));
      //       }
      //       updateTask(idLike, { likes });
      //     });
      //   });
      // });

      // MANDA A LLAMAR LA IMG EDIT Y LUEGO PERMITE EDITAR
      const btnsEdit = taskConteiner.querySelectorAll('.img-edit');
      btnsEdit.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          const doc = await getTask(e.target.dataset.id);
          // const uid = currentUserInfo().uid;
          // console.log(uid)
          console.log(doc);
          const dataPost = doc.data();

          formPost.posts.value = dataPost.postConteiner;
          editStatus = true;
          id = doc.id;

          formPost.buttonToPost.innerHTML = 'Actualizar';
        });
      });

      // NOS PERMITE EDITAR
      taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const postConteiner = taskForm.posts;
        // const uid = currentUser().uid;
        // console.log(uid);

        if (!editStatus) {
          saveTask(postConteiner.value);
        } else {
          updateTask(id, {
            postConteiner: postConteiner.value,
          });

          editStatus = false;
        }

        taskForm.reset();
      });

      // MANDA A LLAMAR LA IMG BORRAR Y LUEGO PERMITE BORRAR
      const btnsDelete = taskConteiner.querySelectorAll('.img-delete');
      btnsDelete.forEach((btn) => {
        btn.addEventListener('click', ({ target: { dataset } }) => {
          deleteTask(dataset.id);
        });
      });
      //
    });
  });

  // PERMITE CERRAR SESION AL USUARIO
  const cerrarSesion = muroDiv.querySelector('#buttonLogout');
  cerrarSesion.addEventListener('click', (e) => {
    e.preventDefault();
    logOut().then(() => {
      // Sign-out successful.
      console.log('siii saliste');
      onNavigate('/');
    }).catch(() => {
      // An error happened.
      console.log('que mala onda, hubo un error');
    });
  });

  return muroDiv;
};
