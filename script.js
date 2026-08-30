const result = document.querySelector("#result")
const yourScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")


const counter = { machineCounter: 0, humanCounter: 0 }

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

function playHuman(humanChoise) {
    PlayGame(humanChoise, PlayMachine())

}

function PlayMachine() {

    result.innerHTML = "..."
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNuber = Math.floor(Math.random() * 3)

    return choices[randomNuber]


}

function PlayGame(humanChoise, machineChoise) {

    const comparisons = {
        rock: humanChoise === GAME_OPTIONS.ROCK && machineChoise === GAME_OPTIONS.SCISSORS,
        paper: humanChoise === GAME_OPTIONS.PAPER && machineChoise === GAME_OPTIONS.ROCK,
        scissors: humanChoise === GAME_OPTIONS.SCISSORS && machineChoise === GAME_OPTIONS.PAPER


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