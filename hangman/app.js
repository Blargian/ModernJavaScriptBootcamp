'use strict'

let puzzleHeader = document.querySelector('#puzzle')
let guesses = document.querySelector('#guesses')

window.addEventListener('keypress',function (e){
    const guess = String.fromCharCode(e.charCode)
    game.takeGuess(guess)
    console.log(game.statusMessage)
})

//Render method
const render = function(){
    guesses.innerHTML = `You have ${game.remainingGuesses} guesses remaining`
    let puzzle = game.puzzle
    puzzleHeader.innerHTML = puzzle
}

render()