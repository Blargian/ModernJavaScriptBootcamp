const updated = document.getElementById('#updated-at')
const title = document.querySelector('#note-title')
const body = document.querySelector('#note-body')
const remove = document.querySelector('#remove-note')

const noteId = location.hash.substring(1)
let notes = getSavedNotes()

let note = notes.find(function(note){
    return note.id === noteId
})

if(note===undefined){
    location.assign('/index.html')
}

//Note title element
title.value = `${note.title}`
title.addEventListener('change',function(e){
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    updatedAt(note.updatedAt)
    saveNote(notes)
})

//Note body element

body.value = `${note.body}`
body.addEventListener('change',function(e){
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    updatedAt(note.updatedAt)
    saveNote(notes)
})

//Remove button

remove.addEventListener('click',function(e){
    removeNote(note.id,notes)
    saveNote(JSON.stringify(notes))
    location.assign(`/index.html`)
})

//Created at tag
const created = document.getElementById('#created-at')
created.textContent = `${moment(note.createdAt).format(dateFormat)}`

//Updates the page telling the user how long ago the update was amde
let updatedAt = function(timestamp){
    updated.textContent = `${moment(timestamp).fromNow()}`
}

window.addEventListener('storage',function(e){
    
    if(e.key == 'notes'){
        notes = JSON.parse(e.newValue)

        let note = notes.find(function(note){
            return note.id === noteId
        })
        
        if(note===undefined){
            location.assign('/index.html')
        }

        title.value = note.title
        body.value = note.body
        updatedAt(note.updatedAt)
    }
})