import { getFilters } from './filters'
import {getTodos, removeToDo, toggleTodo, saveTodos} from './todos'

// renderTodos
// Arguments: none
// Return value: none

const renderTodos = () => {

    const filters = getFilters()
    const filteredToDos = getTodos().filter((list)=>{
        const searchTextMatch = list.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideComplete || !list.completed

        return searchTextMatch && hideCompletedMatch
    })

    document.querySelector('#to-dos').appendChild(generateSummaryDOM(filteredToDos))

    Object.keys(filteredToDos).forEach((key)=>{
        document.querySelector('#to-dos').appendChild(generateTodoDOM(filteredToDos[key]))
    })
}

// generateTodoDOM
// Arguments: todo
// Return value: the todo element

const generateTodoDOM = (todo) => {

    const toDoItem = document.createElement('label')
    toDoItem.classList.add('list-item')
    const containerElement = document.createElement('div')
    containerElement.classList.add('list-item__container')
    const checkBox = document.createElement('input')
    checkBox.setAttribute('type','checkbox')
    checkBox.checked = todo.completed
    checkBox.addEventListener('click',()=>{
        toggleTodo(todo.id)
        renderTodos()
        saveTodos()
    })
    //create the text
    const text = document.createElement('span')
    text.textContent = `${todo.text}`
    //create the cancel button
    const cancel = document.createElement('button')
    cancel.textContent='remove'
    cancel.classList.add('button','button--text')
    cancel.addEventListener('click',()=>{
        removeToDo(todo.id)
    })

    //Append the elements to the div
    containerElement.appendChild(checkBox)
    containerElement.appendChild(text)
    toDoItem.appendChild(containerElement)
    toDoItem.appendChild(cancel)

    return toDoItem
}

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element

const generateSummaryDOM = (incompletedTodos) => {
    
    let left = 0

    incompletedTodos.forEach((item,index)=>{
        if(!item.completed){
            left = left+1
        }
    })

    document.querySelector('#to-dos').innerHTML = ''

    const toDoLeft = document.createElement('h2')
    toDoLeft.classList.add('list-title')
    
    if(left===1){
        toDoLeft.textContent = `You have ${left} todo`
    } else {
        toDoLeft.textContent = `You have ${left} todos`
    }
    
    return toDoLeft
}
// Make sure to set up the exports

export { renderTodos, generateTodoDOM, generateSummaryDOM }