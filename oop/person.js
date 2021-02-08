class Person {
    constructor(firstname, lastname, age,likes){
        this.firstName = firstname
        this.lastName = lastname
        this.age = age
        this.likes = likes
    }

    getBio() {
        let bio = `${this.firstName} is ${this.age}`
        this.likes.forEach((like)=>{
            bio += ` ${this.firstName} likes ${like}.`
        })
        return bio
    }

    setName(fullName){
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

const me = new Person('Adam','Shaun', 27, ['Teaching','Biking']) //This is a constructor function

//The new operator
// 1. Generates a new empty object
// 2. Gives us access to it through the this value

me.lastName = 'Struwig'
me.setName('Bobby Beaver')
console.log(me.getBio())