const myAge = 7
let message 

if(myAge >= 18){
    message = 'You can vote'
} else {
    message = 'You cannot vote'
}

message = myAge >=18 ? 'You can vote :-)' : 'You cannot vote :-(' //This is the conditional operator

const myAge2 = 5
const showPage = () => {
    console.log("Showing the page")
}

const showErrorPage = () => {
    console.log('Showing the error page')
}

myAge2 >= 21 ? showPage() : showErrorPage()

//Challenge

const team = ['Tyler','Jason','Kevin','Dan']

const checkTeamSize = team.length <= 4 ? `Team size: ${team.length}` : `Team size too small by ${4-team.length} people` 
console.log(checkTeamSize)