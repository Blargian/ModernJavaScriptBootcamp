import {ipAPI} from './api'

const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}
// 1. Convert getCountry to use fetch and return a promise
// 2. Make sure getCountry still resolves with the country that match
// 3. change getCountry use to use catch

const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')
    if(response.status === 200){
        const data = await response.json()
         return data.find((countryData)=>{
            return countryData.alpha2Code === countryCode
        })
    } else {
        throw new Error('Something went wrong')
    }
}

new Promise((resolve,reject) => {
    const countryRequest = new XMLHttpRequest()

    countryRequest.addEventListener('readystatechange', (e)=>{
        if(e.target.readyState === 4 && e.target.status===200){
            const countryData = JSON.parse(e.target.responseText)
            const country = countryData.find((countryData)=>{
               return countryData.alpha2Code === countryCode
            })

            country!== undefined ? resolve(country) : reject(`No country ${countryCode} found`)

        } else if (e.target.readyState === 4) {
            console.log("Ooops, something went wrong with request")
        }
    })

})

export default getPuzzle