const myNotes = [{
    title: 'My Holiday Plans',
    body: '',
},{
    title: 'Fitness Goals 2021',
    body: 'oh my',
},{
    title: 'My dear Suzy Jenkins',
    body: 'my my my',
}]

// const findNote = function (notes, noteTitle){
//     return notes.find(function (note, index) {
//         return (note.title.toLowerCase() === noteTitle.toLowerCase())
//     })
// }

// let noteResult = findNote(myNotes,'Fitness Goals 2021')
// console.log(noteResult)

const filteredNotes = myNotes.filter(function (note,index){
    const isTitleMatch = note.title.toLowerCase().includes('my')
    const isBodyMatch = note.body.toLowerCase().includes('my') 
    return isTitleMatch || isBodyMatch
})

const findNotes = function(notes, query){
    return myNotes.filter(function (note,index){
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase()) 
        return isTitleMatch || isBodyMatch
    })
}


const sortNotes = function(notes){
    notes.sort(function(a,b){
        if (a.title.toLowerCase() < b.title.toLowerCase()){
            return -1 //-1 comes before
        } else if (b.title.toLowerCase() < a.title.toLowerCase()){
            return 1 //1 comes after
        } else {
            return 0 //Order doesn't matter
        }
    })
}

console.log(myNotes)
sortNotes(myNotes)
console.log(myNotes)