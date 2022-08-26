// function to let computer randomly choose
function getComputerChoice() {
    // set choices for computer
    let choices = ['Rock', 'Paper', 'Scissors'];
    // get index value randomly
    let computerChoice = choices.at(Math.floor(Math.random() * choices.length))
    return computerChoice;
}

// console.log(getComputerChoice());