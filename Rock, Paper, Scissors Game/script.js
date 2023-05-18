let userScore = 0;
let cpuScore = 0;

function playGame(playerChoice) {
    const plays = ["rock", "paper", "scissors"]

    if (!plays.includes(playerChoice)) {
        throw new Error("Invalid choice")
    }

    const randomIndex = Math.floor(Math.random() * 3)
    const randomChoice = plays[randomIndex]

    let result
    if (playerChoice === randomChoice) {
        result = "It's a tie!"
    } else if (
        (playerChoice === "rock" && randomChoice === "scissors") ||
        (playerChoice === "paper" && randomChoice === "rock") ||
        (playerChoice === "scissors" && randomChoice === "paper")
    ) {
        result = "You win!"
        userScore++
        document.getElementById("user-score").innerHTML = userScore
    } else {
        result = "You lose!"
        cpuScore++
        document.getElementById("cpu-score").innerHTML = cpuScore
    }

    document.getElementById("result").innerHTML = result
}

function playRock() { 
    playGame("rock")
}
function playPaper() {
    playGame("paper")
}
function playScissors() {
    playGame("scissors")
}

const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');

rockBtn.addEventListener('click', playRock);
paperBtn.addEventListener('click', playPaper);
scissorsBtn.addEventListener('click', playScissors);