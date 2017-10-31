// Need user input

var input = prompt("Enter 'ROCK', 'PAPER' or 'SCISSORS'");

// Need random computer input

function computer() {
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
  console.log(output);
}

computer();
// Need test for who wins



// Need counter for wins and losses
