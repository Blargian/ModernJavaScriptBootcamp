'use strict'

import {render} from './index'

class Hangman {
    constructor(word,remainingGuesses){
        this.word = word.toLowerCase().split('')
        this.guessedLetters = []
        this.remainingGuesses = remainingGuesses
        this.status = 'playing'
    }

    get puzzle(){
        let guessedLetters = this.guessedLetters
        let hidden = []
        this.word.forEach(function(letter){
            if(letter===' '){
                hidden.push(' ')
            } else {
                guessedLetters.includes(letter) ? hidden.push(letter) : hidden.push('*')
            }
        })
    
        return hidden.join('') 
    }

    calculateStatus(){
         //some way of checking word vs guessed
    let finished = true
    this.word.forEach((letter)=>{
        
        if(this.guessedLetters.includes(letter)){

        } else {
            finished = false
        }
    })

    if(this.remainingGuesses === 0){
        this.status = 'failed'
    } else if (finished === true){
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }

    }

    get statusMessage(){
        if(this.status === 'playing'){
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return 'Try again next time!'
        } else {
            return 'You guessed this word!'
        }
    }

    takeGuess(guess){
        if(this.status!=='playing'){
            return
        }
    
        let wordString = this.word.join('')
        if(this.guessedLetters.includes(guess)){
            console.log(`Already guessed ${guess}`)
        } else {
            this.guessedLetters.push(guess)
            if(!this.word.includes(guess)) {
                this.remainingGuesses--
            } 
        }
        
        this.calculateStatus()
        render()
    }
} 

export default Hangman


