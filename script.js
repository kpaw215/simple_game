let playerScore = 0;
let computerScore = 0;

function playerChoice(choice) {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const computerChoice = choices[Math.floor(Math.random() * 5)];

    document.getElementById('computer-choice').textContent = `Computer Choosed: ${computerChoice}`;

    if ((choice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard")) ||
        (choice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) ||
        (choice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")) ||
        (choice === "lizard" && (computerChoice === "spock" || computerChoice === "paper")) ||
        (choice === "spock" && (computerChoice === "scissors" || computerChoice === "rock"))) {
        playerScore++;
    } else if (choice !== computerChoice) {
        computerScore++;
    }

    updateResult();
}

function updateResult() {
    document.getElementById('result').textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

    if (playerScore === 3) {
        alert("You Won! Good Job!"); // message to display if win
        resetGame();
    } else if (computerScore === 3) {
        alert("You Lose! Try one more time."); // message to display if lose
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('result').textContent = "";
    document.getElementById('computer-choice').textContent = "";
}