function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// users card
async function getUsers() {
  let url = "https://jsonplaceholder.typicode.com/users";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderUsers() {
  let users = await getUsers();
  let html = "";
  users.forEach((user) => {
    let htmlSegment = `<div class="user">
                            <h3>${user.name}</h3>
                            <a class="link" href="email:${user.email}">${user.email}</a>
                            <a href="">
                            <button>View More Info</button>
                            </a>
                        </div>`;

    html += htmlSegment;
  });

  // let  load = false;
  var container = document.getElementById("userCard");

  container.innerHTML = html;
}

renderUsers();

// albums card ;
async function getAlbum() {
  let url = "https://jsonplaceholder.typicode.com/albums";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
async function renderAlbum() {
  let albums = await getAlbum();
  let html = "";
  albums.forEach((album) => {
    let htmlSegment = `<div class="album">
                            <h3>${album.title}</h3>
                        </div>`;

    html += htmlSegment;
  });

  var containerAlbum = document.getElementById("userAlbum");

  containerAlbum.innerHTML = html;
}

renderAlbum();



// photos card 

async function getPhotos() {
  let url = "https://jsonplaceholder.typicode.com/photos";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
async function renderPhoto() {
  let photos = await getPhotos();
  let html = "";
  photos.forEach((photo) => {
    let htmlSegment = `<div class="photo">
                           <div class="photo-image">
                            <img src="${photo.url}" alt="" />
                            </div>
                           <p>${photo.title}</p>
                        </div>`;

    html += htmlSegment;
  });

  var containerPhoto = document.getElementById("userPhoto");

  containerPhoto.innerHTML = html;
}

renderPhoto();


