var getRandomWord = function () {
  var apiUrl = "https://random-words-api.vercel.app/word";

  // make request to url
  fetch(apiUrl)
    .then(function (response) {
      response.json().then(function (data) {
        console.log(data);
      });
    })
    .catch(function (error) {
      alert("Unable to connect to Word Generator");
    });
};

getRandomWord();
