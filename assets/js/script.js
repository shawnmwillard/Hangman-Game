var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
  
    // check localStorage for high score, if it's not there, use 0
    var highScore = localStorage.getItem("highscore");
    if (highScore === null) {
      highScore = 0;
    }
    // if player have more money than the high score, player has new high score!
    if (playerInfo.money > highScore) {
      localStorage.setItem("highscore", playerInfo.money);
      localStorage.setItem("name", playerInfo.name);
  
      alert(playerInfo.name + " now has the high score of " + playerInfo.money + "!");
    } 
    else {
      alert(playerInfo.name + " did not beat the high score of " + highScore + ". Maybe next time!");
    }
};

// -Users should receive a score at the end of the game
// -Users should be able to submit their score saving to local storage
// -Users shall be required to submit their initial with their score.
// -Users will receive the same set score which will be deducted points for wrong words