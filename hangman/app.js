'use strict'

let puzzleHeader = document.querySelector('#puzzle')
let guesses = document.querySelector('#guesses')
let game

window.addEventListener('keypress',(e) =>{
    const guess = String.fromCharCode(e.charCode)
    game.takeGuess(guess)
    console.log(game.statusMessage)
})


//Render method
const render = () =>{
    let puzzle = game.puzzle
    puzzleHeader.innerHTML = puzzle
}
render()

getPuzzle('2').then(
    (data)=> {
        console.log(data)
    }
).catch(
    (err)=>{
        console.log(err)
    }
)

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game = new Hangman(puzzle,5)
}

document.querySelector('#reset').addEventListener('click',startGame)

startGame()


// 1. create a new function for getting country details
//2. call it with two arguments: country code, the callback function
//3. Make the HTTTP request and call the callback with country information
//4. Use the callback to print the country name

// getCountry('ZA').then(
//     (country) => {
//         console.log(country.name)
//         }
// ).catch(
//     (err) => {
//         console.log(err)
//     }
// )

// fetch('http://puzzle.mead.io/puzzle',{}).then(
//     (response) => {
//         if (response.status === 200){
//             return response.json()
//         } else {
//             throw new Error('çouldnt fetch puzzle')
//         }
//     }
// ).then(
//     (data)=> {
//         console.log(data.puzzle)
//     }
// ).catch(
//     (e) => {
//         console.log(e)
//     }
// )

// 1. Create getLocation function which takes no arguments
// 2. Setup geoLocation function to make a request to the url and parse the data
// 3. Use getLocation to print the city, region, and country information

// const getLocation = async () => {
//     const response = await fetch(ipAPI)
//     if(response.status === 200){
//         const data = await response.json()
//         return data
//     } else {
//         throw new Error('could not reach')
//     }
// }

// getLocation().then(
//     (data) => {
//         return getCountry(data.country)
//     }
// ).then(
//     (country) => {
//         console.log(country.name)
//     }
// ).catch(
//     (err) => {
//         console.log(err)
//     }
// )

