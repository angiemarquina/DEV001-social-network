import { async } from 'regenerator-runtime';
import { connectFirestoreEmulator } from 'firebase/firestore';
import {
  saveTask, onGetTasks, deleteTask, getTask, updateTask,
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
  buttonToPost.textContent = 'Publicar';

  const taskDiv = document.createElement('div');
  taskDiv.id = 'taskDiv';

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.className = 'buttonHome';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  muroDiv.appendChild(muroLogoDiv);
  muroDiv.appendChild(formPost);

  muroLogoDiv.appendChild(footprint);

  formPost.appendChild(muroPostsDiv);
  muroPostsDiv.appendChild(posts);
  muroPostsDiv.appendChild(iconsPostDiv);
  iconsPostDiv.appendChild(buttonToPost);

  muroDiv.appendChild(taskDiv);
  muroDiv.appendChild(buttonHome);

  const taskConteiner = muroDiv.querySelector('#taskDiv');
  const taskForm = muroDiv.querySelector('#formPost');
  let editStatus = false;
  let id = '';

  window.addEventListener('DOMContentLoaded', async () => {
    onGetTasks((querySnapshot) => {
      let html = '';
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        html += `
     <div>
       <p>${task.postConteiner}</p>
       <img src='./imagenes/eliminar.png' class='img-delete' data-id='${doc.id}'>
       <img src='./imagenes/edit.png' class='img-edit' data-id='${doc.id}'>
     </div>
     `;
      });
      taskConteiner.innerHTML = html;

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
  return muroDiv;
};
