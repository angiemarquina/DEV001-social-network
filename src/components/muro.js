import { async } from 'regenerator-runtime';
import { connectFirestoreEmulator } from 'firebase/firestore';
import {
  saveTask, onGetTasks, deleteTask, getTask, updateTask, LogOut, currentUser,
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

  window.addEventListener('DOMContentLoaded', async () => {
    onGetTasks((querySnapshot) => {
      let html = '';
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        const idPost = doc.id;
        console.log(idPost, 'este es el id');
        
        if(idPost == currentUser()){
          

        }
        html += `
     <div class = 'publicaciones'>
       <p>${task.postConteiner}</p>
       <div class = 'contenedorIcons'>
       <img src='./imagenes/heart1_icon.png' class='img-like'>
       <img src='./imagenes/edit_icon.png' class='img-edit' data-id='${doc.id}'>
       <img src='./imagenes/trash_icon.png' class='img-delete' data-id='${doc.id}'>
       </div>
     </div>
     `;
      });
      taskConteiner.innerHTML = html;
      // Decidir en qué lugar poner la función con condicional
      // Obtener el id de usuario mediante el currentUser
      // Obtener el ID del post
      // Una condicional que valide que el usuarioactual(el logeado)coincida
      // con los id de los post que el crea

      const imagesDelete = taskConteiner.querySelectorAll('.img-delete');
      imagesDelete.forEach((img) => {
        img.addEventListener('click', ({ target: { dataset } }) => {
          deleteTask(dataset.id);
        });
      });

      const imagesEdit = taskConteiner.querySelectorAll('.img-edit');
      imagesEdit.forEach((img) => {
        img.addEventListener('click', async (e) => {
          const doc = await getTask(e.target.dataset.id);
          const task = doc.data();

          formPost.posts.value = task.postConteiner;
          editStatus = true;
          // es el mismo que el de la linea 96 pero más corto
          id = doc.id;

          formPost.buttonToPost.innerHTML = 'Actualizar';
        });
      });
    });
  });

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // POSTCONTEINER ES EL ESPACIO
    const postConteiner = taskForm.posts;
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

  const cerrarSesion = muroDiv.querySelector('#buttonLogout');
  cerrarSesion.addEventListener('click', (e) => {
    e.preventDefault();
    LogOut().then(() => {
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
