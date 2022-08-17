const loading = document.querySelector('.load');

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

// Get the element with id="defaultOpen" and click on it
document.getElementById('defaultOpen').click();

const baseurl = 'https://jsonplaceholder.typicode.com';

// users card
async function getUsers() {
  let url = `${baseurl}/users`;
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderUsers() {
  loading.style.display = 'block';
  let users = await getUsers();
  console.log(users);
  let html = '';
  users.forEach((user) => {
    let htmlSegment = `<div class="user">
                            <h3>${user.name}</h3>
                            <a class="link" href="email:${user.email}">${user.email}</a>
                            <button data-id=${user.id} type="button" onclick="getGender(event)" >View More Info</button>
                        </div>`;

    html += htmlSegment;
  });

  // let  load = false;
  var container = document.getElementById('userCard');
  container.innerHTML = html;
  loading.style.display = 'none';
}

renderUsers();

// albums card ;
async function getAlbum() {
  let url = `${baseurl}/albums`;
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
                            <h3>${album.title}</h3>
                        </div>`;

    html += htmlSegment;
  });

  var containerAlbum = document.getElementById('userAlbum');

  containerAlbum.innerHTML = html;
}

renderAlbum();

// photos card

async function getPhotos() {
  let url = `${baseurl}/photos`;
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
                           <div class="photo-image">
                            <img src="${photo.url}" alt="" />
                            </div>
                           <p>${photo.title}</p>
                        </div>`;

    html += htmlSegment;
  });

  var containerPhoto = document.getElementById('userPhoto');

  containerPhoto.innerHTML = html;
}

renderPhoto();

const getGender = async (event) => {
  console.log(event);
  const userId = event.target.dataset.id;
  console.log(userId);
  // const result = await fetch(`${baseurl}/posts?userId=${userId}`);
  const result = await fetch(`${baseurl}/users/${userId}`);
  const posts = await result.json();
  console.log(posts);
};
