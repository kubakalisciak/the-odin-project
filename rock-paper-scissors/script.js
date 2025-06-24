const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')
const scoreDisplay = document.getElementById('scoreDisplay')
const verdictDisplay = document.getElementById('verdictDisplay')
const winnerDisplay = document.getElementById('winnerDisplay')
const resetBtn = document.getElementById('resetBtn')

let humanScore = 0
let computerScore = 0

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

function playGame() {
    function playRound(computerChoice, humanChoice) {
        if (humanChoice == computerChoice) {
            verdictDisplay.textContent = "Tie!";
        }
        else if (humanChoice == "rock" && computerChoice == "scissors") {
            verdictDisplay.textContent = "You win! Rock beats scissors"
            humanScore++;
        }
        else if (humanChoice == "rock" && computerChoice == "paper") {
            verdictDisplay.textContent = "You lose! Rock doesn't beat paper"
            computerScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "rock") {
            verdictDisplay.textContent = "You win! Paper beats rock"
            humanScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
            verdictDisplay.textContent = "You lose! Paper doesn't beat scissors"
            computerScore++
        }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
            verdictDisplay.textContent = "You lose! Scissors don't beat rock"
            computerScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            verdictDisplay.textContent = "You win! Scissors beat paper"
        }
        
        if (humanScore == 5) {
            winnerDisplay.textContent = "You win!"
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
        }
        else if (computerScore == 5) {
            winnerDisplay.textContent = "You lose"
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
        }

        scoreDisplay.textContent = humanScore + " : " + computerScore
    }
    rockBtn.addEventListener("click", () => {
        playRound(getComputerChoice(), "rock")
    });
    
    paperBtn.addEventListener("click", () => {
        playRound(getComputerChoice(), "paper")
    });
    
    scissorsBtn.addEventListener("click", () => {
        playRound(getComputerChoice(), "scissors")
    });
}

playGame()

resetBtn.addEventListener("click", () => {
    winnerDisplay.textContent = ""
    verdictDisplay.textContent = ""
    scoreDisplay.textContent = "0 : 0"
    humanScore = 0
    computerScore = 0
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
});
