const toDo = [{
    text:'Order Cat Food',
    completed:false
},{
    text:'Clean Kitchen',
    completed:true
},{
    text:'Buy Food',
    completed:false
}]

//Challenge: Print summary of how many todos are left in a paragraph

const todosLeft =function(todo){
    let left = 0

    todo.forEach(function(item,index){
        if(!item.completed){
            left = left+1
        }
    })

    return left
}

// toDo.forEach(function(item,index){
//     const p = document.createElement('p')
//     p.textContent = `${index+1}. ${item.text}`
//     document.querySelector('body').appendChild(p)
// })

document.querySelector('#todo-button').addEventListener('click',function(e){
    console.log('Added a ToDo')
})
// Print a p for each To do

const filters = {
    searchText: '',
    hideComplete: false
}

//Listen for todo text change

const renderToDos = function(todolist, filters){
    const filteredToDos = todolist.filter(function(list){
        const searchTextMatch = list.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideComplete || !list.completed

        return searchTextMatch && hideCompletedMatch
    })

    //ANother cool way:
    // filteredToDos = filteredToDos.filter(function(todo){
    // return !filters.hideCompleted || !todo.completed
    //})

    document.querySelector('#to-dos').innerHTML = ''

    const toDoLeft = document.createElement('h2')
    toDoLeft.textContent = `There are ${todosLeft(filteredToDos)} items left to do`
    document.querySelector('#to-dos').appendChild(toDoLeft)

    filteredToDos.forEach(function(aToDo){
        let newToDo = document.createElement('p')

        if(aToDo.completed===true){
            newToDo.classList.add('complete')
        } else {
            newToDo.classList.add('incomplete')
        }

        newToDo.textContent = `${aToDo.text} (${aToDo.completed})`
        document.querySelector('#to-dos').appendChild(newToDo)
    })

}

renderToDos(toDo,filters)

document.querySelector('#filter-todo').addEventListener('input',function(e){
    filters.searchText = e.target.value
    renderToDos(toDo,filters)
})

document.querySelector('#new-todo-form').addEventListener('submit',function(e){
    e.preventDefault()
    toDo.push({text: e.target.elements.toDo.value,
               completed:false})
    renderToDos(toDo,filters)
    e.target.elements.toDo.value = ''
})

document.querySelector('#hide-completed').addEventListener('change',function(e){
    e.target.checked
        filters.hideComplete = e.target.checked
        renderToDos(toDo,filters)
})