// Need user input

var input = prompt("Enter 'ROCK', 'PAPER' or 'SCISSORS'");

// Need random computer input
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

console.log(output);
// Need test for who wins

function test(){
  var message = 0;
  var playerScore = 0;
  var computerScore = 0;
  for (var i = 1; i < 2; i++) {
    while (playerScore < 3 && computerScore < 3) {
      if (input === "ROCK" && output === "SCISSORS") {
        playerScore ++;
        message = "YOU WIN THIS ROUND!"
      } else if (input === "ROCK" && output === "PAPER") {
        computerScore ++;
        message = "YOU LOSE THIS ROUND!";
      } else if (input === "SCISSORS" && output === "ROCK") {
        computerScore ++;
        message = "YOU LOSE THIS ROUND!";
      } else if (input === "SCISSORS" && output === "PAPER") {
        playerScore ++;
        message = "YOU WIN THIS ROUND!"
      } else if (input === "PAPER" && output === "ROCK") {
        playerScore ++;
        message = "YOU WIN THIS ROUND!"
      } else if (input === "PAPER" && output === "SCISSORS") {
        computerScore ++;
        message = "YOU LOSE THIS ROUND!";
      } else if (input === output) {
        message = "IT IS A DRAW.";
      } else {
        alert("Error");
      }
    }
    if (playerScore === 3) {
      alert("You win!");
    } else if (computerScore) {
      alert("You lose!");
    }
  }
  console.log(input);
}



test();
// Need counter for wins and losses
