var wordEl = document.querySelector("#word");
var definitionEl = document.querySelector("#definition");

// fetch random word
var getRandomWord = function () {
  var apiUrl = "https://random-words-api.vercel.app/word";

  // make request to url
  fetch(apiUrl)
    .then(function (response) {
      response.json().then(function (data) {
        displayWord(data);
      });
    })
    .catch(function (error) {
      alert("Unable to connect to Word Generator");
    });
};

// display word and definition
var displayWord = function (data) {
  var word = data[0].word;

  wordEl.textContent = word;
};

// fetch happy gif
var getHappyGif = function () {
  var apiKey = "048XdOO30aILTLFNYsn8fU2oZSaEuMmM";
  var apiUrl =
    "https://api.giphy.com/v1/gifs/search?api_key=" +
    apiKey +
    "&q=happy&limit=1&rating=pg";

  fetch(apiUrl)
    .then(function (response) {
      response.json().then(function (data) {
        console.log(data);
      });
    })
    .catch(function (error) {
      alert("Unable to connect to Giphy");
    });
};

// fetch sad gif
var getSadGif = function () {
  var apiKey = "048XdOO30aILTLFNYsn8fU2oZSaEuMmM";
  var apiUrl =
    "https://api.giphy.com/v1/gifs/search?api_key=" +
    apiKey +
    "&q=sad&limit=1&rating=pg";

  fetch(apiUrl)
    .then(function (response) {
      response.json().then(function (data) {
        console.log(data);
      });
    })
    .catch(function (error) {
      alert("Unable to connect to Giphy");
    });
};

getRandomWord();
getHappyGif();
getSadGif();
