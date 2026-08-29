const result = document.querySelector("#result")
const yourScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")



const counter = { machineCounter: 0, humanCounter: 0 }

function playHuman(humanChoise) {
    PlayGame(humanChoise, PlayMachine())

}

function PlayMachine() {
    const choices = ["rock", 'paper', 'scissors']
    const randomNuber = Math.floor(Math.random() * 3)

    return choices[randomNuber]


}

function PlayGame(humanChoise, machineChoise) {

    const comparisons = {
        rock: humanChoise === "rock" && machineChoise === "scissors",
        paper: humanChoise === "paper" && machineChoise === "rock",
        scissors: humanChoise === "scissors" && machineChoise === "paper"


    }

    if (humanChoise === machineChoise) {

        result.innerHTML = "Empatou!"
    }
    else if (comparisons.rock || comparisons.paper || comparisons.scissors) {
        result.innerHTML = "Você Ganhou!"

        counter.humanCounter += 1
        yourScore.innerHTML = counter.humanCounter

    } else {
        result.innerHTML = " Você perdeu para o Ban!"

        counter.machineCounter += 1

        machineScore.innerHTML = counter.machineCounter
    }

}