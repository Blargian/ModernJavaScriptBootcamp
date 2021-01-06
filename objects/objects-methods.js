let restuarant = {
    name: 'Manhattans',
    guestCapacity: 30,
    guestCount: 0,

    //checks if a given partySize can fit in the restuarant
    checkAvailability: function (partySize) {
        if(this.guestCapacity - this.guestCount >= partySize){
            return true
        } else{
            return false
        }
    }, 
    seatParty: function(partySize){

        if(this.checkAvailability(partySize)===true){
            this.guestCount = this.guestCount + partySize
        } else {
            console.log(`Overbooking Alert: You tried to add ${partySize} but the maximum is ${this.guestCapacity}`)
        }
        
    },
    removeParty: function(partySize){
        this.guestCount = this.guestCount - partySize
        console.log(`Guest Count: ${this.guestCount}`)
    }

}

let status = restuarant.checkAvailability(5)
console.log(status)
restuarant.seatParty(29)
console.log(restuarant)