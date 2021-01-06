let myAccount = {
    name: 'Shaun',
    expenses: 0,
    income: 0
}

//Adds expenses to the account
let addExpense = function (account, amount){
    account.expenses = account.expenses + amount 
}

//Adds income to the account
let addIncome = function (account, amount){
    account.income = account.income + amount 
}

let resetAccount = function (account){
    account.name = ''
    account.expenses = 0
    account.income =0
}

let getAccountSummary = function (account){
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses`
}


//Test 

// console.log(myAccount)
// addExpense(myAccount,500)
// console.log(myAccount)
// addIncome(myAccount,1000)
// console.log(myAccount)
// console.log(getAccountSummary(myAccount))
// resetAccount(myAccount)
// console.log(myAccount)
