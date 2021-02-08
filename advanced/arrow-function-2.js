const add = function () {
    return arguments[0] + arguments[1]
}

const car = {
   color: 'Red',
   getSummary: function () {
       return `The car is ${this.color}`
   } 
}

console.log(car.getSummary)