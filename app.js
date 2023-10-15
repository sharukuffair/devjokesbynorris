const jokeContainer = document.querySelector(".content");
const btnNext = document.querySelector(".next");
const btnLike = document.querySelector(".like");
const notifyAddToFav = document.querySelector(".add-to-fav");
const joke = document.querySelector(".joke");
const sharuk = document.querySelector(".sharuk");
const favCon = document.querySelector(".fav-container");

// default case
jokeContainer.textContent = fetchJokesData();

// fav jokes list
let favJokesList = [];

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
    ` <div class="joke">
              <p class='sharuk'>❝ ${jokeContainer.textContent} ❞</p> 
              <ion-icon name="copy-outline" class='copyBtn' onClick='copyContent()'>
              </ion-icon>
            </div>`
  );
}

// `<p class="joke" onClick='copyFunction()'>❝ ${jokeContainer.textContent} ❞
//     sharuk
//     </p>`;

async function copyContent(e) {
  try {
    // console.log(e.target);
    await navigator.clipboard.writeText(sharuk.textContent());
  } catch (e) {
    console.log(e);
  }
}

// might be used in futher usecase or new features
// `<p class="joke">❝ ${localStorage.getItem(localStorage.key("joke"))} ❞</p>`;
// for (var i = 0; i < localStorage.length; i++) {
//   favCon.insertAdjacentHTML(
//     "afterbegin",
//     `<p class="joke">❝ ${localStorage.getItem(localStorage.key(i))} ❞</p>`
//   );
// }
