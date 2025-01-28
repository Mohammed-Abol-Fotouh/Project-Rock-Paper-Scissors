function getComputerChoice() {
	let choices = ["rock", "paper", "scissors"];
	return choices.at(Math.floor(Math.random() * choices.length));
}

const buttons = document.querySelector(".selections");
let playerSelection = null;
let computerSelection = null;
let computerScore = 0;
let playerScore = 0;

const round = document.querySelector(".round");
const current = document.querySelector(".current");
const winner = document.querySelector(".winner");

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

	const result = playRound(playerSelection, computerSelection);
	round.textContent = result;

	current.textContent = `Current Scores - Player: ${playerScore} Computer: ${computerScore}`;

	if (playerScore === 5 || computerScore === 5) {
		winner.textContent =
			playerScore === 5 ? "You win the game!" : "Computer wins the game!";

		playerScore = 0;
		computerScore = 0;
		round.textContent = "";
		current.textContent = "";
	}
});

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
