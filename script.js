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

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper or Scissors?");
    playerChoice = `${playerChoice.slice(0, 1).toUpperCase()}${playerChoice.slice(1).toLowerCase()}`;
    return playerChoice;
}

function round(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Rock") {
        alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return 0;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper") {
        alert(`You Win! ${playerSelection} beats ${computerSelection}`);
        return 1;
    } else {
        alert("Tie");
    }
}

function game() {
    let roundCounter = 1;
    let roundOutcome;
    let playerScore = 0;
    let computerScore = 0;

    while (roundCounter <= 5) {
        alert(`Round ${roundCounter}!`);
        roundOutcome = round(getPlayerChoice(), getComputerChoice());
        if (roundOutcome === 0) {
            computerScore++;
        } else if (roundOutcome === 1) {
            playerScore++;
        }
        alert(`Player: ${playerScore}\nComputer: ${computerScore}`)
        roundCounter++;
    }

    if (playerScore > computerScore) {
        alert("Congratulations! You won the game!");
    } else if (computerScore > playerScore) {
        alert("Boo! You lost to a computer!");
    } else {
        alert("The game is a tie!");
    }
}

game();