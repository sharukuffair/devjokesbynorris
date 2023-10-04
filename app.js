const jokeContainer = document.querySelector(".content");
const btnNext = document.querySelector(".next");
const btnLike = document.querySelector(".like");
const notifyAddTOFav = document.querySelector(".add-to-fav");

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
  favJokesList.push(jokeContainer.textContent);
  notifyAddTOFav.classList.add("active");

  setTimeout(() => {
    notifyAddTOFav.classList.remove("active");
  }, 1000);
}

btnLike.addEventListener("click", addToFavJokes);
