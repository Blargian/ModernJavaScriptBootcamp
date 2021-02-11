import uuidv4 from 'uuid/v4'
import {renderTodos} from './views'

// Setup the empty todos array

let todos = []

// loadTodos
// Arguments: none
// Return value: none

const loadTodos = () => {
    const todoJSON = localStorage.getItem('todo')
    todoJSON ? todos = JSON.parse(todoJSON) : todos = []
}
// saveTodos
// Arguments: none
// Return value: none

const saveTodos = () => {
    localStorage.setItem('todo',JSON.stringify(todos))
}

// getTodos
// Arguments: none
// Return value: todos array

const getTodos = () => {
    return todos
}

// createTodo
// Arguments: todo text
// Return value: none

const createToDo = (toDoText) => {
    todos.push({
        id:uuidv4(),
        text:toDoText,
        completed: false,
    })
}
// removeTodo
// Arguments: id of todo to remove
// Return value: none

const removeToDo = (id) => {
    const todos = getTodos()
    const index = todos.findIndex((item)=>item.id === id)
    todos.splice(index,1)
    saveTodos()
    renderTodos()
}

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none

const toggleTodo = (id) => {
    const index = todos.findIndex((item) => item.id === id)
    todos[index].completed = !todos[index].completed
}

// Make sure to call loadTodos and setup the exports

loadTodos()

export { saveTodos, getTodos, createToDo, removeToDo, toggleTodo }