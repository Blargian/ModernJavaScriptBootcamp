// // DOM - Document Object Model

// const p = document.querySelector('p') //matches the first one
// console.log(p) //results in Null? -> elements haven't been parsed yet
// // hence why we place script at the end of the body

// // Query all and remove

// const allP = document.querySelectorAll('p')
// console.log(allP)
// allP.forEach(function(p,index){
//     p.textContent = `Bob ${index +1}`
// })

//Adding a new element

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

const filters={
    searchText: ''
}

const renderNotes = function (notes,filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    console.log(filteredNotes)

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function(note){
        
        let noteElement = document.createElement('p')
        noteElement.textContent = note.title
        document.querySelector('#notes').appendChild(noteElement)
    })
}

renderNotes(myNotes,filters)

document.querySelector('#create-note').addEventListener('click', function(e){
    console.log(e.target.textContent = 'The Button was clicked')
})

document.querySelector('#search-text').addEventListener('input',function(e){
    filters.searchText = e.target.value
    renderNotes(myNotes,filters)
})

document.querySelector('#filter-by').addEventListener('çhange',function(e){
    console.log(e.target.value)
})