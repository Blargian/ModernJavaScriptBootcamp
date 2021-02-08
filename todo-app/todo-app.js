let toDo = getSavedTodos()

document.querySelector('#todo-button').addEventListener('click',function(e){
    console.log('Added a ToDo')
})

const filters = {
    searchText: '',
    hideComplete: false
}

renderToDos(toDo,filters)

document.querySelector('#filter-todo').addEventListener('input',function(e){
    filters.searchText = e.target.value
    renderToDos(toDo,filters)
})

document.querySelector('#new-todo-form').addEventListener('submit',function(e){
    e.preventDefault()
    toDo.push({
        id:uuidv4(),
        text: e.target.elements.toDo.value,
        completed:false})
    saveTodos(toDo)
    renderToDos(toDo,filters)
    e.target.elements.toDo.value = ''
})

document.querySelector('#hide-completed').addEventListener('change',function(e){
    e.target.checked
        filters.hideComplete = e.target.checked
        renderToDos(toDo,filters)
})

//CHallenge
//1. Delete dummy data
//2. Read and parse data if it exists
//3. Stringify and write when new data is added