// Question 1 (btw, i noticed that the variable name was division, but the function is a remainder function)
const division = (a, b) => a % b;

// Question 2
const apiUrl =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=e3883df96920494ba1c96394bfc34358";
const proxy = "https://noroffcors.herokuapp.com/";
const corsFix = proxy + apiUrl;

const resultsContainer = document.querySelector(".result");

async function getGames() {
  try {
    const response = await fetch(corsFix);
    const results = await response.json();
    const games = results.results;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < games.length; i++) {
      if (i === 8) {
        break;
      }

      resultsContainer.innerHTML += `<div class="result"><h1>Name: ${games[i].name}</h1>
      <p>Rating: ${games[i].rating}</p>
      <p>Amount of tags: ${games[i].tags.length}</p></div>`;
    }
  } catch (error) {
    console.log("An error has occured.");
    resultsContainer.innerHTML = createErrorMsg("error", "An error occured!");
  }
}

getGames();
