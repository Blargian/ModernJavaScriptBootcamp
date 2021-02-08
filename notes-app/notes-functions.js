'use strict'

//Date formatting
dateFormat = 'YYYY-MM-DD, hh:mm:ss'

// Check for existing saved data in local storage
const getSavedNotes = () => {
    
    const notesJSON = localStorage.getItem('notes')
    
    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        []
    }

}

//Saves a note (pass the note)
const saveNote = (noteToSave) =>{
    noteToSave.updatedAt = moment().format(dateFormat)
    localStorage.setItem('notes',JSON.stringify(noteToSave))
}

//Removes a note from the list
const removeNote = (id) =>{
    const noteIndex = notes.findIndex((note) => note.id === id)

    if(noteIndex > -1){
        notes.splice(noteIndex,1)
    }
}

//generate the DOM structure for a note
const generateNoteDOM = (note) =>{
    const noteElement = document.createElement('div')
    const textElement = document.createElement('a')
    const button = document.createElement('button')

    //Setup the remove note button
    button.textContent = 'x'
    noteElement.appendChild(button)
    button.addEventListener('click',()=>{
        removeNote(note.id)
        renderNotes(notes,filters)
        getSavedNotes(notes)
    })
    // Setup the note title text
        if(note.title.length>0){
            textElement.textContent = note.title
            
        } else {
            textElement.textContent = 'Unnamed note'
        }

        textElement.setAttribute('href',`/edit.html#${note.id}`)
        noteElement.appendChild(textElement)
        
        return noteElement
}

//sort notes by one of three ways
const sortNotes = (notes, sortBy) =>{
    if(sortBy === 'byEdited'){
        return notes.sort((a,b)=>{
            if(a.updatedAt > b.updatedAt){
                return -1
            } else if(a.updatedAt < b.updatedAt){
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated'){
        return notes.sort((a,b)=>{
            if(a.createdAt > b.createdAt){
                return -1
            } else if (a.createdAt < b.createdAt){
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byAlphabetical'){
        return notes.sort((a,b)=>{
            if(a.title.toLowerCase() < b.title.toLowerCase()){
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()){
                return 1
            } else {
                return 0
            }
        })
    }
}

//Render applications notes
const renderNotes = (notes,filters) =>{
    notes = sortNotes(notes,filters.sortBy)
    const filteredNotes = notes.filter((note)=>note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach((note)=>{
        
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
        })
}

