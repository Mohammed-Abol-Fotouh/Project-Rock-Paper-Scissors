// function to let computer randomly choose
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices.at(Math.floor(Math.random() * choices.length))
    return computerChoice;
}

function getPlayerChoice() {
    let playerInput = prompt('type your choice...');
    let result = playerInput.toLowerCase();
    return result;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "it's a tie replay this round";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! paper beats rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! rock beats scissors";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! scissors beats paper";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! paper beats rock";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! rock beats scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! scissors beats paper"
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
