var wordEl = document.querySelector("#word");
var definitionEl = document.querySelector("#definition");
var playArea = document.querySelector("#playarea");

// fetch random word and definition
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
  var definition = data[0].definition;

  wordEl.textContent = word;
  definitionEl.textContent = "Definition: " + definition;

  wordSpaces(word);
};

// display blank spaces for word
var wordSpaces = function (word) {
  console.log(word.length);
  var wordEl = document.createElement("ul");

  for (var i = 0; i < word.length; i++) {
    var letterEl = document.createElement("li");
    letterEl.id = "correct-letter";
    letterEl.textContent = "_";

    wordEl.appendChild(letterEl);
    playArea.appendChild(wordEl);
  }
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
