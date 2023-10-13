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

function playRound(playerSelection, computerSelection) {
    const results = document.querySelector("#results");
    if (playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Rock") {
        results.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper") {
        results.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        results.textContent = "Tie";
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.id === "rock") {
            playRound("Rock", getComputerChoice());
        } else if (button.id === "paper") {
            playRound("Paper", getComputerChoice());
        } else if (button.id === "scissors") {
            playRound("Scissors", getComputerChoice());
        }
    });
});