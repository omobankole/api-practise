function openPage(pageName, elmnt, color) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablink');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = '';
  }
  document.getElementById(pageName).style.display = 'block';
  elmnt.style.backgroundColor = color;
}

const getUserId = () => {
  const queryParams = window.location.search;
  const searchParams = new URLSearchParams(queryParams);
  return searchParams.get('id') || 1;
};

// Get the element with id="defaultOpen" and click on it
document.getElementById('defaultOpen').click();

let loadData = document.querySelector('.load-info');
const baseurl = 'https://jsonplaceholder.typicode.com';

// users card
async function getUser() {
  const id = getUserId();
  let url = `${baseurl}/users/${id}`;
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

(async function renderDetails() {
  loadData.style.display = 'block';
  const details = await getUser();
  loadData.style.display = 'none';
  console.log(details);
  document.querySelector('.name').textContent = details.name;
  document.querySelector('.email').textContent = details.email;
  document.querySelector('.phone').textContent = details.phone;
  document.querySelector('.company').textContent = details.company.name;
  document.querySelector('.location').textContent = details.address.city;
  document.querySelector('.website').textContent = details.website;
})();

// render todos
async function getTodo() {
  const id = getUserId();

  let url = `${baseurl}/users/${id}/todos`;
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
async function renderTodo() {
  let todos = await getTodo();
  let html = '';
  todos.forEach((todo) => {
    let htmlSegment = `<div class="todo">
                            <h3>${todo.title}</h3>
                            <p type="${todo.completed}"></p>
                        </div>`;
    html += htmlSegment;
  });

  var containerTodo = document.getElementById('userTodo');

  containerTodo.innerHTML = html;
}

renderTodo();

// photos card
async function getPhotos() {
  const id = getUserId();

  let url = `${baseurl}/albums/${id}/photos`;
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
async function renderPhoto() {
  let photos = await getPhotos();
  let html = '';
  photos.forEach((photo) => {
    let htmlSegment = `<div class="photo">
                             <div class="photo-image"}>
                              <img src="${photo.url}" alt="image" />
                              </div>
                        </div>`;

    html += htmlSegment;
  });

  var containerPhoto = document.getElementById('userPhoto');

  containerPhoto.innerHTML = html;
}

renderPhoto();

// albums card;
async function getAlbum() {
  const id = getUserId();

  let url = `${baseurl}/users/${id}/albums`;
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
async function renderAlbum() {
  let albums = await getAlbum();
  let html = '';
  albums.forEach((album) => {
    let htmlSegment = `<div class="album">
                            <div class="photo-image"> 
                            <img src="http://source.unsplash.com/1600x900/?album-art=${album.title}" alt="album" />
                            </div>
                            <p>${album.title}</p>
                        </div>`;

    html += htmlSegment;
  });

  var containerAlbum = document.getElementById('userAlbum');

  containerAlbum.innerHTML = html;
}

renderAlbum();

document.getElementById('back').addEventListener('click', () => {
  window.history.back();
});
