var choiceArr = ["r", "p", "s"];
var userWins = 0;
var computerWins = 0;
var ties = 0;
var playAgain = true;

while (playAgain) {
  function playGame() {
    var userChoice = prompt("What is your choice? Enter R for Rock, P for Paper, or S for Scissors").toUpperCase();
    var computerChoice = choiceArr[Math.floor(Math.random() * choiceArr.length)];

    var result;

    if (userChoice === computerChoice) {
      result = "It's a tie!";
      ties++;
    } else if (
      (userChoice === "R" && computerChoice === "s") ||
      (userChoice === "P" && computerChoice === "r") ||
      (userChoice === "S" && computerChoice === "p")
    ) {
      result = "You win!";
      userWins++;
    } else {
      result = "You lose!";
      computerWins++;
    }

    alert(`You chose ${userChoice}. The computer chose ${computerChoice}. ${result}`);
  }

  alert(`Total wins: ${userWins}\nTotal ties: ${ties}\nTotal losses: ${computerWins}`);
  playGame();
  playAgain = confirm("Do you want to play again?");
}

alert(`Final tally:\nTotal wins: ${userWins}\nTotal ties: ${ties}\nTotal losses: ${computerWins}`);
