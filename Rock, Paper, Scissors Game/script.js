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
        result = "It's a draw!"
    } else if (
        (playerChoice === "rock" && randomChoice === "scissors") ||
        (playerChoice === "paper" && randomChoice === "rock") ||
        (playerChoice === "scissors" && randomChoice === "paper")
    ) {
        result = "CPU won!"
        userScore++
        document.getElementById("user-score").innerHTML = userScore
    } else {
        result = "User won!"
        cpuScore++
        document.getElementById("cpu-score").innerHTML = cpuScore
    }
    document.getElementsByClassName("cpu-hand-image")[0].src = "images/" + randomChoice + ".png"
    document.getElementById("result").innerHTML = result
}

const rockImg = "images/rock.png"
const paperImg = "images/paper.png"
const scissorsImg = "images/scissors.png"
let lastUserImg = rockImg

function playRock() { 
    document.getElementsByClassName("user-hand-image")[0].src = rockImg
    lastUserImg = rockImg
    playGame("rock")
}
function playPaper() {
    document.getElementsByClassName("user-hand-image")[0].src = paperImg
    lastUserImg = paperImg
    playGame("paper")
}
function playScissors() {
    document.getElementsByClassName("user-hand-image")[0].src = scissorsImg
    lastUserImg = scissorsImg
    playGame("scissors")
}

const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');

rockBtn.addEventListener('click', playRock);
paperBtn.addEventListener('click', playPaper);
scissorsBtn.addEventListener('click', playScissors);