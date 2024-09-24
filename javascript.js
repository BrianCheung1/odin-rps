function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    if (choice === 0) {
        return "rock"
    } else if (choice === 1) {
        return "paper"
    }
    else if (choice === 2) {
        return "scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, Scissors?").toLowerCase()
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid response, Rock, Paper, Scissors?").toLowerCase()
    }
    return choice.toLowerCase()
}


function playGame() {
    let humanScore = 0
    let computerScore = 0
    let ties = 0

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            ties++
            console.log("Its a tie")
        }

        else if (
            humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper"
        ) {
            humanScore++
            console.log(`${humanChoice} beats ${computerChoice}, You Win!`)
        }
        else {
            computerScore++
            console.log(`${computerChoice} beats ${humanChoice}, You Lose!`)

        }
    }

    for (let i = 0; i <= 4; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }
    console.log("Human: " + humanScore)
    console.log("Computer: " + computerScore)
    console.log("Ties: " + ties)
}

playGame()