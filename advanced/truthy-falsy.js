const products = [{name: 'Keyboard'}]
const product = products[0]

// Truthy - values that resolve to true in a boolean context
// Flasy - values that resolve to false in a boolean context

//eg string evaluates truthy

if(product){
    console.log('product found')
} else {
    console.log('product not found')
}

// Falsy values: false, 0, empty string, null, undefined