// insert variables for alphabet
var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var wordEl = document.querySelector("#word");
var definitionEl = document.querySelector("#definition");
var playArea = document.querySelector("#playarea");
var alphaList = document.getElementById("alphabet-list");
var gifContainerEl = document.querySelector("#gif");

// begin quiz
document.getElementById("begin-game").addEventListener("click", function () {
  getRandomWord();
  getButton();
});

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
  word = data[0].word;
  var definition = data[0].definition;

  wordEl.textContent = word;
  wordEl.id = "hidden-word";
  definitionEl.textContent = "Definition: " + definition;
  definitionEl.id = "definition";

  wordSpaces(word);
};

// display blank spaces for word
var wordSpaces = function (word) {
  console.log(word.length);
  var wordEl = document.createElement("ul");
  wordEl.id = "word-letter-spaces";

  for (var i = 0; i < word.length; i++) {
    var letterEl = document.createElement("li");
    letterEl.id = "letter-space";
    letterEl.classList.add("correct-letter");
    letterEl.textContent = "_";
    $(letterEl).attr("value", word[i].toLowerCase());
    wordEl.appendChild(letterEl);
    playArea.appendChild(wordEl);
  }
};

// input guess array function
function populateWord(guess) {
  const wordArray = word.toLowerCase().split("");
  console.log(guess);
  console.log(wordArray);
  for (var i = 0; i < wordArray.length; i++) {
    if (guess === wordArray[i]) {
      console.log("letter-exists");
      $(`[value=${guess}]`).text(guess);
    }
  }
}

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
        displayHappyGif(data);
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
        displaySadGif(data);
      });
    })
    .catch(function (error) {
      alert("Unable to connect to Giphy");
    });
};

// display happy gif
var displayHappyGif = function (data) {
  var gif = data.data[0].images.original.url;

  // create element for gif
  var gifEl = document.createElement("img");
  gifEl.setAttribute("src", gif);
  gifContainerEl.appendChild(gifEl);
};

// display sad gif
var displaySadGif = function (data) {
  var gif = data.data[0].images.original.url;

  // create element for gif
  var gifEl = document.createElement("img");
  gifEl.setAttribute("src", gif);
  gifContainerEl.appendChild(gifEl);
};

// inject buttons on page
function getButton() {
  var gameBtn = document.getElementById("#buttons");
  var lettersEl = document.createElement("ul");

  for (var i = 0; i < alphabet.length; i++) {
    lettersEl.id = "alphabet";
    createBtnLet = document.createElement("button");
    createBtnLet.id = "letter";
    createBtnLet.classList.add("guess");
    createBtnLet.setAttribute("value", alphabet[i]);
    createBtnLet.textContent = alphabet[i];
    lettersEl.appendChild(createBtnLet);
    alphaList.appendChild(lettersEl);
  }
  $(".guess").on("click", function (event) {
    console.log(this.value);
    populateWord(this.value);
    console.log(this);
  });
}

// end game if win or lose

// display gif
var displayGif = function () {};

// getRandomWord();
getHappyGif();
getSadGif();
// getButton();
