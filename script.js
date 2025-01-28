// get computer choice
function getComputerChoice() {
	let choices = ["rock", "paper", "scissors"];
	return choices.at(Math.floor(Math.random() * choices.length));
}

const buttons = document.querySelector(".selections");

let playerSelection = null;
let computerSelection = null;
let computerScore = 0;
let playerScore = 0;

buttons.addEventListener("click", (e) => {
	switch (e.target.id) {
		case "rock":
			playerSelection = "rock";
			break;
		case "paper":
			playerSelection = "paper";
			break;
		case "scissors":
			playerSelection = "scissors";
			break;
	}
	computerSelection = getComputerChoice();

	// Play a round and log the result
	const result = playRound(playerSelection, computerSelection);
	console.log(result);

	// Log the current scores
	console.log(
		`Current Scores - Player: ${playerScore} Computer: ${computerScore}`,
	);

	if (playerScore === 5 || computerScore === 5) {
		console.log(
			playerScore === 5 ? "You win the game!" : "Computer wins the game!",
		);

		playerScore = 0;
		computerScore = 0;
	}
});

// play one round and save the score
function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return "It's a tie! Replay this round.";
	} else if (
		(playerSelection === "rock" && computerSelection === "paper") ||
		(playerSelection === "paper" && computerSelection === "scissors") ||
		(playerSelection === "scissors" && computerSelection === "rock")
	) {
		computerScore++;
		return `You lose! ${computerSelection} beats ${playerSelection}.`;
	} else {
		playerScore++;
		return `You win! ${playerSelection} beats ${computerSelection}.`;
	}
}
