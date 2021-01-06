let name = 'Shaun Struwig'

// Length property

let length = name.length
console.log(length)

//Convert to upper case


console.log(name.toUpperCase())

//Includes method

let password = 'abc123password098'
console.log(password.includes('password'))

// Trim (Trims whitespace)
// Useful for sanitizing data that users enter

//Challenge 

// isValidPassword
// only Return true if length is more than 8, doesn't contain the word password

let isValidPassword = function(password){
    if( (password.length>=8) && (password.includes('password') === false)){
        return true
    } else {
        return false
    }
}

console.log(isValidPassword('Blargian123'))
