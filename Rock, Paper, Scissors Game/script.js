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
    } else {
        result = "You lose!"
    }

    console.log(`You played ${playerChoice}`)
    console.log(`Random played ${randomChoice}`)
    console.log(result)
}

playGame("rock")
