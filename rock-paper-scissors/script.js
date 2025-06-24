// console.log("Hello World!")
function get_computer_choice() {
    choice = Math.floor(Math.random() * 3)
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

function get_human_choice() {
    return prompt("Rock, paper, scissors?").toLowerCase()
}

let humanScore = 0
let computerScore = 0
