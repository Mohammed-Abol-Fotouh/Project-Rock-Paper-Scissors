// get computer choice
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices.at(Math.floor(Math.random() * choices.length))
    return computerChoice;
}

// get player choice
function getPlayerChoice() {
    let playerInput = prompt('type your choice...');
    let result = playerInput.toLowerCase();
    return result;
}

// play one round and save score
function playRound(playerSelection, computerSelection) {
    let computerScore = 0;
    let playerScore = 0;

    if (playerSelection === computerSelection) {
        return "it's a tie replay this round";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return `You lose! paper beats rock
                computer: ${computerScore} | player: ${playerScore}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return `You win! rock beats scissors
                computer: ${computerScore} | player: ${playerScore}`;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return `You lose!scissors beats paper
                computer: ${computerScore} | player: ${playerScore}`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return `You win! paper beats rock
                computer: ${computerScore} | player: ${playerScore}`;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return `You lose! rock beats scissors
                computer: ${computerScore} | player: ${playerScore}`;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return `You win! scissors beats paper
                computer: ${computerScore} | player: ${playerScore}`;
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
