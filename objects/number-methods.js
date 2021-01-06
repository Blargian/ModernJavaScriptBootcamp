let num = 687.4546456

//Challenge area
// 1 -5 - true if correct... false if not correct

let makeGuess = function(yourGuess){
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random()*(max-min)) + min

    console.log(randomNum)

    if(yourGuess===randomNum){
        console.log("You guessed correctly")
    } else {
        console.log("Try again")
    }
}

makeGuess(2)