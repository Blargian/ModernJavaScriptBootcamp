let myBook = {
    title: '1984',
    author: 'George Orwell',
    isbn: 12345789
}

let myBook2 = {
    title: 'Narnia',
    author: 'C.S Lewis',
    isbn: 987654321
}

let getSummary = function(book){
    return{
        shortSummary: `${book.title} by ${book.author}`,
        longSummary: `${book.title} by ${book.author} (ISBN: ${book.isbn})`
    }
}

let book1 = getSummary(myBook)

console.log(book1.shortSummary)
console.log(book1.longSummary)

//Challenge
// Create function that takes fahrenheit - returns an object with all three

let conversion = function(tempFahrenheit){
    let celcius = (tempFahrenheit - 32)/1.8000
    let kelvin = celcius + 273.15

    return{
        fahrenheit: tempFahrenheit,
        celcius: celcius,
        kelvin: kelvin
    }
}

console.log(conversion(36).kelvin)