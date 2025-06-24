const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')
const scoreDisplay = document.getElementById('scoreDisplay')
const verdictDisplay = document.getElementById('verdictDisplay')
const winnerDisplay = document.getElementById('winnerDisplay')

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    switch (choice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function getHumanChoice() {
    return prompt("Rock, paper, scissors?").toLowerCase()
}

function playGame() {
    let humanScore = 0
    let computerScore = 0
    
    function playRound(computerChoice, humanChoice) {
        if (humanChoice == computerChoice) {
            console.log("Tie!")
        }
        else if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You win! Rock beats scissors")
            humanScore++;
        }
        else if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose! Rock doesn't beat paper")
            computerScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You win! Paper beats rock")
            humanScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("You lose! Paper doesn't beat scissors")
            computerScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You lose! Scissors don't beat rock")
            computerScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You win! Scissors beat paper")
            humanScore++;
        }
    }
    

    console.log("Score: " + humanScore + " : " + computerScore)
}

playGame()