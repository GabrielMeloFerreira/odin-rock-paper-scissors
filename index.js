let humanScore = 0
let computerScore = 0
let round = 1

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = ""

    if (randompedNumber === 0) {
        computerChoice = "pedra";
    }
    if (randomNumber === 1) {
        computerChoice = "tesoura";
    }
    if (randomNumber === 2) {
        computerChoice = "papel";
    }

    return computerChoice
}

function getHumanChoice() {
    let choice = prompt("Pedra, Papel ou Tesoura?");

    return choice.toLowerCase();
}



function playRound(humanSelection, computerSelection) {

    if (humanSelection === computerSelection) {
        console.log("Empate!")
    } else if (humanSelection === "pedra" && computerSelection == "tesoura") {
        console.log("Você ganhou o round!")
        humanScore++
    } else if (humanSelection === "papel" && computerSelection == "pedra") {
        console.log("Você ganhou o round!")
        humanScore++;
    } else if (humanSelection === "tesoura" && computerSelection == "papel") {
        console.log("Você ganhou o round!")
        humanScore++;
    } else {
        console.log("Você perdeu o round!")
        computerScore++;
    }
    console.log("sua seleção:", humanSelection)
    console.log("seleção do pc:", computerSelection)
    console.log(humanScore, computerScore)
}

while (round < 6) {
    console.log("Round:", round);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    round++;
}




