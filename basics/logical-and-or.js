//challenge

let guestOneVegan = false
let guestTwoVegan = false

if(guestOneVegan && guestTwoVegan){
    console.log("Vegan only menu")
} else if (guestOneVegan || guestTwoVegan){
    console.log("Mixed menu (Vegan and Traditional)")
} else{
    console.log("Traditional menu")
}