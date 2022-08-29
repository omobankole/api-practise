const loading = document.querySelector(".load");

const baseurl = "https://jsonplaceholder.typicode.com";

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
  loading.style.display = "block";
  let users = await getUsers();
  console.log(users);
  let html = "";
  users.forEach((user) => {
    let htmlSegment = `<div class="user">
                            <h3>${user.name}</h3>
                            <a class="link" href="email:${user.email}">${user.email}</a>
                            <button data-id=${user.id} type="button" onclick="getInfo(event, ${user.id})" >View More Info</button>
                        </div>`;
    html += htmlSegment;
  });

  // let  load = false;
  var container = document.getElementById("userCard");
  container.innerHTML = html;
  loading.style.display = "none";
}

renderUsers();

// get more user info
const getInfo = async (event, id) => {
  window.location.href = `/info.html?id=${id}`;
  console.log(id);
};
