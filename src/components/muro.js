import { async } from 'regenerator-runtime';
import { saveTask, getTasks } from '../fiberbase/firebase.js';

export const muro = (onNavigate) => {
  const muroDiv = document.createElement('div');
  muroDiv.className = 'muroDiv';
  const muroLogoDiv = document.createElement('div');
  muroLogoDiv.className = 'muroLogoDiv';
  const muroPostsDiv = document.createElement('div');
  muroPostsDiv.className = 'muroPostsDiv';
  const iconsPostDiv = document.createElement('div');
  iconsPostDiv.className = 'iconsPostDiv';

  const footprint = document.createElement('img');
  footprint.src = './imagenes/patitarosa.png';
  footprint.alt = 'la huella de una patita';
  footprint.className = 'footprint';

  const titleViewThree = document.createElement('h1');
  titleViewThree.textContent = 'CoHabita';
  titleViewThree.className = 'title';

  const formPost = document.createElement('form');
  formPost.id = 'formPost';

  const posts = document.createElement('textarea');
  posts.placeholder = 'Agrega un post...';
  posts.className = 'posts';
  posts.id = 'posts';

  const buttonToPost = document.createElement('button');
  buttonToPost.id = 'buttonToPost';
  buttonToPost.textContent = 'Publicar';

  // const likePost = document.createElement('img');
  // likePost.src = './imagenes/like.png';
  // likePost.alt = 'corazón para like';
  // likePost.className = 'likePost';

  // const editPost = document.createElement('img');
  // editPost.src = './imagenes/edit.png';
  // editPost.alt = 'icono de lapiz';
  // editPost.className = 'editPost';

  const deletePost = document.createElement('img');
  deletePost.src = './imagenes/eliminar.png';
  deletePost.alt = 'icono de bote de basura';
  deletePost.className = 'deletePost';

  const taskDiv = document.createElement('div');
  taskDiv.id = 'taskDiv';

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.className = 'buttonHome';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  muroDiv.appendChild(muroLogoDiv);
  muroDiv.appendChild(formPost);

  muroLogoDiv.appendChild(footprint);
  muroLogoDiv.appendChild(titleViewThree);

  formPost.appendChild(muroPostsDiv);
  muroPostsDiv.appendChild(posts);
  muroPostsDiv.appendChild(iconsPostDiv);
  iconsPostDiv.appendChild(deletePost);
  iconsPostDiv.appendChild(buttonToPost);

  muroDiv.appendChild(taskDiv);
  muroDiv.appendChild(buttonHome);

  const taskConteiner = muroDiv.querySelector('#taskDiv')

  window.addEventListener('DOMContentLoaded', async () => {
    const querySnapshot = await getTasks();
    let html = '';
    querySnapshot.forEach((doc) => {
      const task = doc.data();
      html += `
     <div>
       <p>${task.postConteiner}</p>
     </div>
     `;
    });
    taskConteiner.innerHTML = html;
  });

  const taskForm = muroDiv.querySelector('#formPost');

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const postConteiner = taskForm.posts;

    saveTask(postConteiner.value);
    taskForm.reset();
  });
  return muroDiv;
};
