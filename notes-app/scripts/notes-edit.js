'use strict'

const updated = document.getElementById('#updated-at')
const title = document.querySelector('#note-title')
const body = document.querySelector('#note-body')
const remove = document.querySelector('#remove-note')

const noteId = location.hash.substring(1)
let notes = getSavedNotes()

let note = notes.find((note) => note.id === noteId)

if(!note){
    location.assign('/index.html')
}

//Note title element
title.value = `${note.title}`
title.addEventListener('change',(e) =>{
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    updatedAt(note.updatedAt)
    saveNote(notes)
})

//Note body element

body.value = `${note.body}`
body.addEventListener('change',(e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    updatedAt(note.updatedAt)
    saveNote(notes)
})

//Remove button

remove.addEventListener('click',(e) =>{
    removeNote(note.id,notes)
    saveNote(notes)
    location.assign(`/index.html`)
})

//Created at tag
const created = document.getElementById('#created-at')
created.textContent = `${moment(note.createdAt).format(dateFormat)}`

//Updates the page telling the user how long ago the update was amde
let updatedAt = (timestamp) => {
    updated.textContent = `${moment(timestamp).fromNow()}`
}

window.addEventListener('storage',(e) =>{
    
    if(e.key == 'notes'){
        notes = JSON.parse(e.newValue)

        let note = notes.find((note) => note.id === noteId)
        
        if(!note){
            location.assign('/index.html')
        }

        title.value = note.title
        body.value = note.body
        updatedAt(note.updatedAt)
    }
})