'use strict'

let notes = getSavedNotes()

const filters={
    searchText: '',
    sortBy: 'byEdited',
}

renderNotes(notes,filters)

document.querySelector('#create-note').addEventListener('click', (e) =>{
    const id = uuidv4()
    const timestamp = moment().valueOf()
    notes.push({
        id:id,
        title:'',
        body:'',
        createdAt: timestamp, 
        updatedAt: timestamp,
    })
    saveNote(notes)
    location.assign(`/edit.html#${notes[notes.length-1].id}`)
})

document.querySelector('#search-text').addEventListener('input',(e) =>{
    filters.searchText = e.target.value
    renderNotes(notes,filters)
})

document.querySelector('#filter-by').addEventListener('change',(e) =>{
    filters.sortBy = e.target.value
    debugger;
    renderNotes(notes,filters)
})

window.addEventListener('storage',(e) =>{
    if(e.key === 'notes'){
        try{
            notes = JSON.parse(e.newValue)
        } catch {
            print('could not store the data')
        }
        
        renderNotes(notes,filters)
    }
})

//1. Add createdAt and updatedAt to the new notes (store timestamp)
//2. Update updatedAt when someone edits a title or body
//3. Delete all old notes before testing 