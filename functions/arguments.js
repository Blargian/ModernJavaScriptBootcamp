//total, tip

let calculateTip = function(total,tipPercent=0.1){
    let tipValue = total*tipPercent
    let percent = tipPercent*100
    return `A ${percent}% tip on $${total} would be $${tipValue}`
}

console.log(calculateTip(200))