function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3)
  if (choice === 0) {
    return "rock"
  } else if (choice === 1) {
    return "paper"
  } else if (choice === 2) {
    return "scissors"
  }
}

function getHumanChoice(choice) {
  //   let choice = prompt("Rock, Paper, Scissors?").toLowerCase()
  //   while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
  //     choice = prompt("Invalid response, Rock, Paper, Scissors?").toLowerCase()
  //   }
  //   return choice.toLowerCase()
  return choice.toLowerCase()
}

// function playGame() {
//   let humanScore = 0
//   let computerScore = 0
//   let ties = 0

//   function playRound(humanChoice, computerChoice) {
//     if (humanChoice == computerChoice) {
//       ties++
//       console.log("Its a tie")
//     } else if (
//       (humanChoice === "rock" && computerChoice === "scissors") ||
//       (humanChoice === "paper" && computerChoice === "rock") ||
//       (humanChoice === "scissors" && computerChoice === "paper")
//     ) {
//       humanScore++
//       console.log(`${humanChoice} beats ${computerChoice}, You Win!`)
//     } else {
//       computerScore++
//       console.log(`${computerChoice} beats ${humanChoice}, You Lose!`)
//     }
//   }

//     for (let i = 0; i <= 4; i++) {
//       playRound(getHumanChoice(), getComputerChoice())
//     }
//   console.log("Human: " + humanScore)
//   console.log("Computer: " + computerScore)
//   console.log("Ties: " + ties)
// }

let humanScore = 0
let computerScore = 0
let ties = 0

function playRound(humanChoice, computerChoice) {
  let result = ""
  if (humanChoice == computerChoice) {
    ties++
    console.log("Its a tie")
    result = "Its a tie"
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++
    console.log(`${humanChoice} beats ${computerChoice}, You Win!`)
    result = `${humanChoice} beats ${computerChoice}, You Win!`
  } else {
    computerScore++
    console.log(`${computerChoice} beats ${humanChoice}, You Lose!`)
    result = `${computerChoice} beats ${humanChoice}, You Lose!`
  }
  if (humanScore === 5 || computerScore === 5) {
    buttons.forEach((button) => {
      if (button.id !== "reset") {
        button.disabled = true
      }
    })
  }
  if (humanScore === 5) {
    winner.textContent = "Human reached 5 points first!"
  } else if (computerScore === 5) {
    winner.textContent = "Computer reached 5 points first!"
  }
  return result
}

const container = document.querySelector("#container")
const buttons = document.querySelectorAll("button")
const reset = document.querySelector("#reset")
const resultText = document.createElement("p")
const score = document.createElement("p")
const winner = document.createElement("p")

buttons.forEach((button) => {
  if (button.id !== "reset") {
    button.addEventListener("click", () => {
      const result = playRound(getHumanChoice(button.id), getComputerChoice())
      resultText.textContent = result
      score.textContent = `Human: ${humanScore} Computer: ${computerScore} Ties: ${ties}`
    })
  }
})

reset.addEventListener("click", () => {
  humanScore = 0
  computerScore = 0
  ties = 0
  resultText.textContent = ""
  score.textContent = ""
  winner.textContent = ""
  buttons.forEach((button) => {
    if (button.id !== "reset") {
      button.disabled = false
    }
  })
})

container.appendChild(resultText)
container.appendChild(score)
container.append(winner)
