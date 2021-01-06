let book = {
    title: '1984',
    author: 'George Orwell',
    isbn: 12345789
}

console.log(`${book.title} by ${book.author} (ISBN: ${book.isbn})`)

book.title = 'Animal Farm'

console.log(`${book.title} by ${book.author} (ISBN: ${book.isbn})`)

//Challenge

let person = {
    name: 'Shaun',
    age: 25,
    location: 'South Africa'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)

person.age = person.age + 1

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)