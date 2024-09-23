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

console.log(getComputerChoice())

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

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log("its a tie")
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore++
            console.log("rock loses to paper, computer wins")
        } else if (humanChoice === "rock" && computerChoice == "scissors") {
            humanScore++
            console.log("rock beats scissors, human wins")
        }

        else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++
            console.log("paper beats rock, human wins")
        } else if (humanChoice === "paper" && computerChoice == "scissors") {
            computerScore++
            console.log("paper loses to sicssors, computer wins")
        }

        else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++
            console.log("scissors beat paper, human wins")
        } else if (humanChoice === "scissors" && computerChoice == "rock") {
            computerScore++
            console.log("scissors loses to rock, computer wins")
        }
    }

    for (let i = 0; i <= 4; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }
    console.log("Human: " + humanScore)
    console.log("Computer: " + computerScore)
}

playGame()