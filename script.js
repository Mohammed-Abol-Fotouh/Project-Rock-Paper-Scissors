// get computer choice
function getComputerChoice() {
	let choices = ["rock", "paper", "scissors"];
	let computerChoice = choices.at(Math.floor(Math.random() * choices.length));
	return computerChoice;
}

// get player choice
function getPlayerChoice() {
	let playerInput = prompt("type your choice...");
	let result = playerInput.toLowerCase();
	return result;
}

let computerScore = 0,
	playerScore = 0;

// play one round and save the score
function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return "it's a tie replay this round";
	} else if (playerSelection === "rock" && computerSelection === "paper") {
		computerScore++;
		return `You lose! paper beats rock`;
	} else if (playerSelection === "rock" && computerSelection === "scissors") {
		playerScore++;
		return `You win! rock beats scissors`;
	} else if (playerSelection === "paper" && computerSelection === "scissors") {
		computerScore++;
		return `You lose!scissors beats paper`;
	} else if (playerSelection === "paper" && computerSelection === "rock") {
		playerScore++;
		return `You win! paper beats rock`;
	} else if (playerSelection === "scissors" && computerSelection === "rock") {
		computerScore++;
		return `You lose! rock beats scissors`;
	} else if (playerSelection === "scissors" && computerSelection === "paper") {
		playerScore++;
		return `You win! scissors beats paper`;
	}
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
console.log(
	"Final Results: Player: " + playerScore + " Computer: " + computerScore,
);

// function game() {

//   for (i = 0; i < 5; i++) {
//     const result = playRound(getPlayerChoice(), getComputerChoice());
//     console.log(result);
//     if (result.includes("win")) {
//       console.log(`computer: ${computerScore} | player: ${playerScore}`);
//     } else if (result.includes("lose")) {
//       console.log(`computer: ${computerScore} | player: ${playerScore}`);
//     }
//   }
//   console.log(
//     "Final Results: Player: " + playerScore + " Computer: " + computerScore
//   );
//   if (playerScore > computerScore) {
//     console.log("You win the game!");
//   } else if (playerScore < computerScore) {
//     console.log("You lose the game.");
//   } else {
//     console.log("The game was an overall tie.");
//   }
// }

// game();
