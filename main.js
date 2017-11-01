// User input function

function inputFunction() {
  var input = prompt("Enter 'ROCK', 'PAPER' or 'SCISSORS'");
  return input;
}

// Computer random generator

function computerChoice(){
  var output = 0;
  var comp = Math.random() * 3;
  if (comp <= 1) {
    output = "ROCK";
  }
  else if (comp <= 2) {
    output = "PAPER";
  }
  else {
    output = "SCISSORS";
  }
  return output;
}

// Decide winner function

function winner() {

  var user = inputFunction();
  var computer = computerChoice();
  var message = 0;

  console.log(user);
  if (user == computer) {
    return 0;
  } else if(user === "ROCK" && computer === "SCISSORS") {
    return 1;
  } else if (user == "ROCK" && computer == "PAPER") {
    return 2;
  } else if (user == "SCISSORS" && computer == "ROCK") {
    return 2;
  } else if (user == "SCISSORS" && computer == "PAPER") {
    return 1;
  } else if (user == "PAPER" && computer == "ROCK") {
    return 1;
  } else if (user == "PAPER" && computer == "SCISSORS") {
    return 2;
  }
}

// main code

var check = 0;
while (check == 0){
  var playerScore = 0;
  var computerScore = 0;
  while (playerScore <= 2 && computerScore <= 2) {
    var whoWon = winner();
    if (whoWon === 0){
      alert("It's a DRAW!" + "\n\nSCORE: " + playerScore + " - " + computerScore);
    } else if (whoWon === 1){
      playerScore ++;
      alert("You WIN this round!" + "\n\nSCORE: " + playerScore + " - " + computerScore);
    } else if (whoWon === 2){
      computerScore ++;
      alert("You LOSE this round!" + "\n\nSCORE: " + playerScore + " - " + computerScore);
    }
  }
  if (playerScore === 3){
    alert("Congratulation you've WON!!!")
  } else if (computerScore === 3){
    alert("Unfortunately you LOST this time...")
  }
  check = 1;
}
