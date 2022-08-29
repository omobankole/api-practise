function openPage(pageName, elmnt, color) {
  let i, tabcontent, tablinks;
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

let data = {};
let loadData = document.querySelector(".load-info");
const baseurl = "https://jsonplaceholder.typicode.com";

// users card
async function getUsers() {
  let url = `${baseurl}/users/${window.location.search.split("=")[1]}`;
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

(async function renderDetails() {
  loadData.style.display = "block";
  let details = await getUsers();
  loadData.style.display = "none";
  console.log(details);
  data = details;
  document.querySelector(".name").textContent = data.name;
  document.querySelector(".email").textContent = data.email;
  document.querySelector(".phone").textContent = data.phone;
  document.querySelector(".company").textContent = data.company.name;
  document.querySelector(".location").textContent = data.address.city;
  document.querySelector(".website").textContent = data.website;
})();

// render todos
async function getTodo() {
  let url = `${baseurl}/users/${window.location.search.split("=")[1]}/todos`;
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
async function renderTodo() {
  let todos = await getTodo();
  let html = "";
  todos.forEach((todo) => {
    let htmlSegment = `<div class="todo">
                            <h3>${todo.title}</h3>
                            <p type="${todo.completed}"></p>
                        </div>`;
    html += htmlSegment;
  });

  var containerTodo = document.getElementById("userTodo");

  containerTodo.innerHTML = html;
}

renderTodo();

// photos card
async function getPhotos() {
  let url = `${baseurl}/albums/${window.location.search.split("=")[1]}/photos`;
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
                             <div class="photo-image"}>
                              <img src="${photo.url}" alt="image" />
                              </div>
                        </div>`;

    html += htmlSegment;
  });

  var containerPhoto = document.getElementById("userPhoto");

  containerPhoto.innerHTML = html;
}

renderPhoto();

// albums card;
async function getAlbum() {
  let url = `${baseurl}/users/${window.location.search.split("=")[1]}/albums`;
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
                            <div class="photo-image"> 
                            <img src="http://source.unsplash.com/1600x900/?album-art=${album.title}" alt="album" />
                            </div>
                            <p>${album.title}</p>
                        </div>`;

    html += htmlSegment;
  });

  var containerAlbum = document.getElementById("userAlbum");

  containerAlbum.innerHTML = html;
}

renderAlbum();

document.getElementById("back").addEventListener("click", () => {
  window.history.back();
});
