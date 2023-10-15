const jokeContainer = document.querySelector(".content");
const btnNext = document.querySelector(".next");
const btnLike = document.querySelector(".like");
const notifyAddToFav = document.querySelector(".add-to-fav");
const favCon = document.querySelector(".fav-container");
const favPara = document.querySelector(".fav-para");

// default case
jokeContainer.textContent = fetchJokesData();

// fav jokes list
let favJokesList = [];
let storeJokes = [];

// API CALL
async function fetchJokesData() {
  try {
    let jokes = await fetch(
      "https://api.chucknorris.io/jokes/random?category=dev"
    );
    let data = await jokes.json();
    // render function
    renderJokes(data);
  } catch (e) {
    console.log(e);
  }
}

// render in UI
function renderJokes(data) {
  try {
    jokeContainer.textContent = `${data?.value}`;
  } catch (e) {
    console.log(e);
  }
}

btnNext.addEventListener("click", fetchJokesData);

function addToFavJokes() {
  localStorage.setItem("joke", jokeContainer.textContent);
  renderFavJokes();
  notifyAddToFav.classList.add("active");
  setTimeout(() => {
    notifyAddToFav.classList.remove("active");
  }, 1000);
}

btnLike.addEventListener("click", addToFavJokes);

function renderFavJokes() {
  favCon.style.display = "flex";
  favCon.insertAdjacentHTML(
    "afterbegin",
    `<p class="joke">❝ ${jokeContainer.textContent} ❞</p>`
  );
}

// might be used in futher usecase or new features
// `<p class="joke">❝ ${localStorage.getItem(localStorage.key("joke"))} ❞</p>`;
// for (var i = 0; i < localStorage.length; i++) {
//   favCon.insertAdjacentHTML(
//     "afterbegin",
//     `<p class="joke">❝ ${localStorage.getItem(localStorage.key(i))} ❞</p>`
//   );
// }

// console.log(favJokesList);
