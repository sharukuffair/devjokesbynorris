const jokeContainer = document.querySelector(".content");
const btnNext = document.querySelector(".next");
const btnLike = document.querySelector(".like");
const notifyAddToFav = document.querySelector(".add-to-fav");
const favCon = document.querySelector(".fav-container");

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
  localStorage.setItem(
    Math.floor(Math.random() * 1000),
    jokeContainer.textContent
  );

  // favJokesList.push(localStorage.getItem("joke"));
  notifyAddToFav.classList.add("active");
  setTimeout(() => {
    notifyAddToFav.classList.remove("active");
  }, 1000);
}

btnLike.addEventListener("click", addToFavJokes);

// window.addEventListener("storage", myFunction);

// function myFunction(e) {
//   console.log(e);
//   console.log("change made in storage");
// }
// console.log(localStorage);

// favJokesList.push(jokeContainer.textContent);

// for (let i = 0; i < localStorage.length; i++) {
//   let key = localStorage.key(i);
//   console.log(` ${localStorage.getItem(key)}`);
//   favJokesList.push(localStorage.getItem(key));
// }

for (var i = 0; i < localStorage.length; i++) {
  // $("body").append(localStorage.getItem(localStorage.key(i)));
  // demo.textContent = localStorage.getItem(localStorage.key(i));
  favJokesList.push(localStorage.getItem(localStorage.key(i)));
}
console.log(favJokesList);

favJokesList.forEach(function (item, index) {
  console.log(item);
  // let p = document.createElement("p");
  // p.appendChild("body");
  // p.textContent = item;
});

// console.log(storeJokes);

// console.log(favJokesList);
// console.log(favJokesList);

// console.log(typeof localStorage);

// for (let j in localStorage) {
//   // console.log(localStorage[j]);
//   favJokesList.push(localStorage.getItem(j));
//   if (favJokesList) {
//     favJokesList.forEach((joke) => {
//       show.textContent = joke;
//     });
//   }
// }
// console.log(favJokesList);
