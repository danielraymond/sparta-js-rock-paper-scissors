// Get input
function getUserInput() {
  return prompt("Please choose either 'rock', 'paper' or 'scissors'.");
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

// Get the player move
function getPlayerMove(playerMove) {
  return playerMove || getUserInput();
}

// get the computer move
function getComputerMove(computerMove) {
  return computerMove || randomPlay();
}

// var test = getComputerMove();
// console.log("This is the computer move:", test);

// will need to play to five
function startGame() {
  alert("Let's play rock paper scissors")
  // score variables
  var playerScore = 0;
  var computerScore = 0;

  while (playerScore < 5 && computerScore < 5) {
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var winner = checkForWinner(playerMove, computerMove);

    if (winner === "player"){
      playerScore ++;
      alert("The player won that round with - " + playerMove + "against - " + computerMove + "-------" + "The scores are --- Player " + playerScore + "Computer score --- " + computerScore);
    } else if (winner === "computer"){
      computerScore ++;
      alert("The computer won that round with - " + computerMove + "against - " + playerMove + "-------" + "The scores are --- Player " + playerScore + "Computer score --- " + computerScore);
    } else {
      alert("That was a tie with - " + playerMove + computerMove)
    }
  }
}

// check for winner
function checkForWinner(playerMove, computerMove) {
  var winner;

  if (playerMove === computerMove) {
    winner = "tie";
    winner;
  } else if ((playerMove === "rock" && computerMove === "scissors") || (playerMove === "paper" && computerMove === "rock") || (playerMove === "scissors" && computerMove === "paper")) {
    winner = "player";
  } else {
    winner = "computer";
  }
  return winner;
}



startGame();
