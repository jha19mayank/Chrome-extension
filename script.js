fetch("https://api.chucknorris.io/jokes/random")
  .then((data) => data.json())
  .then((jokeData) => {
    const jokes = jokeData.value;
    const jokeText = document.getElementById("jokeText");
    jokeText.innerHTML = jokes;
  });
