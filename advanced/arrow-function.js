const square = (num) => {
    return num * num
}

//shorthand syntax with arrow functions
// one line returns

const shortSquare = (num) => num*num

const people = [{
    name: 'Shaun',
    age: 25,
}, 
{
    name: 'Alina',
    age: 23,
},
{
    name: 'Vikram',
    age: 22,
}]


const under30 = people.filter(function(person){
    return person.age <25
}) 

const under30arrow = people.filter((person) => person.age<25)

//Challenge
//1. Find person with age 22
//2. Print that persons name

const personAged22 = people.filter((person)=>person.age === 22)
console.log(personAged22)

//Differences between arrow and normal functions