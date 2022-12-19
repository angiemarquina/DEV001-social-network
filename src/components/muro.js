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

  const posts = document.createElement('textarea');
  posts.placeholder = 'Agrega un post...';
  posts.className = 'posts';
  posts.id = 'posts';

  const likePost = document.createElement('img');
  likePost.src = './imagenes/like.png';
  likePost.alt = 'corazón para like';
  likePost.className = 'likePost';

  const editPost = document.createElement('img');
  editPost.src = './imagenes/edit.png';
  editPost.alt = 'icono de lapiz';
  editPost.className = 'editPost';

  const deletePost = document.createElement('img');
  deletePost.src = './imagenes/eliminar.png';
  deletePost.alt = 'icono de bote de basura';
  deletePost.className = 'deletePost';

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.className = 'buttonHome';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  muroDiv.appendChild(muroLogoDiv);
  muroDiv.appendChild(muroPostsDiv);

  muroLogoDiv.appendChild(footprint);
  muroLogoDiv.appendChild(titleViewThree);

  muroPostsDiv.appendChild(posts);
  muroPostsDiv.appendChild(iconsPostDiv);
  iconsPostDiv.appendChild(likePost);
  iconsPostDiv.appendChild(editPost);
  iconsPostDiv.appendChild(deletePost);

  muroDiv.appendChild(buttonHome);
  return muroDiv;
};
