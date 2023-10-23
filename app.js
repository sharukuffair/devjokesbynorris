const jokeContainer = document.querySelector(".content");
const btnNext = document.querySelector(".next");
const btnLike = document.querySelector(".like");
const notifyAddToFav = document.querySelector(".add-to-fav");

const joke = document.querySelector(".joke");
const jokeContent = document.querySelector("[data-jokeContent]");
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
  // localStorage.setItem("joke", jokeContainer.textContent);
  renderFavJokes();
  notifyAddToFav.classList.add("active");
  setTimeout(() => {
    notifyAddToFav.classList.remove("active");
  }, 1000);
}

btnLike.addEventListener("click", addToFavJokes);

function renderFavJokes() {
  favCon.style.display = "flex";
  let html = ` <div class="joke">
              <blockquote class='jokeContent'>❝ ${jokeContainer.textContent} ❞</blockquote>   
            </div>`;
  favCon.insertAdjacentHTML("afterbegin", html);
}

// async function copyContent(e) {
//   // try {
//   //   await navigator.clipboard.writeText(
//   //     document.getElementsByTagName("blockquote").innerHTML()
//   //   );
//   // } catch (e) {
//   //   console.log(e);
//   // }
//   // console.log(blockquote[0].textContent);
//   // console.log(e);
// }

// might be used in futher usecase or new features
// `<p class="joke">❝ ${localStorage.getItem(localStorage.key("joke"))} ❞</p>`;
// for (var i = 0; i < localStorage.length; i++) {
//   favCon.insertAdjacentHTML(
//     "afterbegin",
//     `<p class="joke">❝ ${localStorage.getItem(localStorage.key(i))} ❞</p>`
//   );
// }

// icon btn
{
  /* <ion-icon
  name="copy-outline"
  class="copyBtn"
  onClick="copyContent()"
></ion-icon>; */
}
