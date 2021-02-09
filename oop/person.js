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

    set fullName (fullName){
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

class Employee extends Person{
    
    constructor(firstName, lastName, age, position, likes){
        super(firstName, lastName, age, likes)
        this.position = position
    }

    getBio() {
        let bio = `${this.firstName} is ${this.age}. `
        bio += `${this.firstName} is a ${this.position}`
        return bio
    }

    getYearsLeft(){
        return 65 - this.age
    }

}

class Student extends Person {
    constructor(firstName, lastName, age, likes, grade){
        super(firstName, lastName, age, likes)
        this.grade = grade
    }

    getBio() {
        let bio = `${this.firstName} is ${this.age}. `
        this.grade > 50 ? bio+=`Grade: ${this.grade} PASS` : bio+= `Grade: ${this.grade} FAIL`
        return bio
    }

    updateGrade(newGrade){
        this.grade = newGrade
    }

}

student1 = new Student('Kevin','Jones',15,['sleeping'],60)
student1.fullName = 'Shaun Struwig'
console.log(student1.getBio())
student1.updateGrade(20)
console.log(student1.getBio())