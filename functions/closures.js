const createCounter = () => {
    let count =0

    return{
        increment(){
            count++
        },
        decrement(){
            count--
        },
        get(){
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

//Adder
const createAdder = (a) => {
    return (b) => {
        return a +b
    }
}

//Tipper

//1. Create createTipper which takes in the base tip
//2. Set it up to return a function that takes in the bill amount
//3. Call createTipper to generate a few functions for different percentages
//4. Use the generated functions to calculate tips and print them 

const createTipper = (baseTip) =>{

    let tip = baseTip
    return (billAmount) => {
        return billAmount*tip
    }
}

fifteenPercent = createTipper(0.15)
twentyPercent = createTipper(0.2)
thirtyPercent = createTipper(0.3)

console.log(fifteenPercent(100))
console.log(twentyPercent(100))
console.log(thirtyPercent(100))