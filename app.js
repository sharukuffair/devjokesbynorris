const jokeContainer = document.querySelector(".content");
const btnNext = document.querySelector(".next");
const btnLike = document.querySelector(".like");
const notifyAddToFav = document.querySelector(".add-to-fav");

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
  // favJokesList.push(jokeContainer.textContent);

  localStorage.setItem(
    Math.floor(Math.random() * 1000),
    jokeContainer.textContent
  );
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    // console.log(` ${localStorage.getItem(key)}`);
    favJokesList.push(localStorage.getItem(key));
  }

  // favJokesList.push(localStorage.getItem("joke"));
  notifyAddToFav.classList.add("active");
  setTimeout(() => {
    notifyAddToFav.classList.remove("active");
  }, 1000);
}

btnLike.addEventListener("click", addToFavJokes);
// console.log(storeJokes);

// console.log(favJokesList);
console.log(favJokesList);
