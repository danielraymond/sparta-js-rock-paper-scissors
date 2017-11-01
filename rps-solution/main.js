// Get input
function getUserInput() {
  return prompt("Please choose either 'rock', 'paper' or 'scissors'.");
}

// Get the player move
function getPlayerMove() {
  return getUserInput();
}

// Random player
function randomPlay() {
  var randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}


// get the computer move

var test = randomPlay();
console.log(test);

// will need to play to five

// check for winner

//
