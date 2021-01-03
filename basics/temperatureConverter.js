//Challenge

var fahrenheit = 31

let celcius = (fahrenheit - 32)/1.8

let kelvin = celcius + 273.15

console.log('Fahrenheit reading: ' + fahrenheit)
console.log('Celcius reading: ' + celcius)
console.log('Kelvin reading: ' + kelvin)

if(celcius < 0){
    console.log("FREEZING!!!")
}