function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
    }
}

function round(playerSelection, computerSelection) {
    playerSelection = `${playerSelection.slice(0, 1).toUpperCase()}${playerSelection.slice(1).toLowerCase()}`;

    if (playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Rock") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return "Tie!";
    }
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(round(playerSelection, computerSelection));