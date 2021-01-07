
//Challenge 1 
//Expense -> description, the amount

//Challenge2 
//2. Get account summary (total up all expenses) -> Shaun has R500 in expenses

//Challenge - Add an income array to the account 
// set=up an addIncome method -> description, amount
//3. getAccountSummary tweek, to get the balance.
//Eg Shaun has a balance of X, Y in Income and Z in Expenses

const account = {
    name: 'Shaun',
    expenses: [],
    addExpense: function(description, amount){
    
        let newExpense = {
            description: description,
            amount: amount
        }
        
        this.expenses.push(newExpense)
    },
    income: [],
    addIncome: function(description, amount){

        let newIncome = {
            description:description,
            amount:amount
        }

        this.income.push(newIncome)
    },
    getSummary: function (){

        let totalExpenses = 0
        let totalIncome = 0

        this.expenses.forEach(function(expense,index){
            totalExpenses = totalExpenses + expense.amount
        })

        this.income.forEach(function(incomeItem,index){
            totalIncome = totalIncome + incomeItem.amount
        })

        let balance = totalIncome - totalExpenses

        return `${this.name} has a balance of R${balance}: R${totalIncome} in Income and R${totalExpenses} in Expenses`
        }
}

account.addIncome('Salary January', 4000)
console.log(account)

account.addExpense('Coffee at Starbucks', 200)
account.addExpense('Birthday Presents', 600)
console.log(account)


    
console.log(account.getSummary())

