import {
  savePost, onGetPosts, deletePost, getPost, updatePost, logOut, currentUser,
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
  // agregar un condicional que solo postee cuando este lleno

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
    onGetPosts((querySnapshot) => {
      let html = '';
      console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        const dataPost = doc.data();
        console.log(dataPost);
        const time = dataPost.date.seconds;
        console.log(time);
        const objectoAccion = new Date(time * 1000);
        if (dataPost.userUid === currentUser().Uid) {
          html += `
            <div class = 'publicaciones'>
              <img src='${dataPost.profilePhoto}'>
              <p>${dataPost.userName}</p>
              <p>${objectoAccion}</p>
              <p>${dataPost.postConteiner}</p>
              <div class = 'contenedorIcons'>
                <img src='./imagenes/edit_icon.png' class='img-edit' data-id='${doc.id}'>
                <img src='./imagenes/trash_icon.png' class='img-delete' data-id='${doc.id}'>
              </div>
            </div>
          `;
        } else {
          html += `
            <div class = 'publicaciones'>
            <img src='${dataPost.profilePhoto}'>
            <p>${dataPost.userName}</p>
            <p>${objectoAccion}</p>
            <p>${dataPost.postConteiner}</p>
            </div>
          `;
        }
      });

      taskConteiner.innerHTML = html;

      // MANDA A LLAMAR LA IMG EDIT Y LUEGO PERMITE EDITAR
      const btnsEdit = taskConteiner.querySelectorAll('.img-edit');
      btnsEdit.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          const doc = await getPost(e.target.dataset.id);
          const dataPost = doc.data();

          formPost.posts.value = dataPost.postConteiner;
          editStatus = true;
          id = doc.id;

          formPost.buttonToPost.innerHTML = 'Actualizar';
        });
      });

      taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        formPost.buttonToPost.innerHTML = 'Publicar';
        // hacer un ternario para que de actualizar pase a publicar

        const postConteiner = taskForm.posts;
        const userUid = currentUser().uid;
        const profilePhoto = currentUser().photoURL;
        const userName = currentUser().displayName;
        const date = new Date();

        if (!editStatus) {
          savePost(postConteiner.value, userUid, profilePhoto, userName, date);
        } else {
          updatePost(id, {
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
          deletePost(dataset.id);
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
