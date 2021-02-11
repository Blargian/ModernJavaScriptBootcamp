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
        text:toDoText
    })
}
// removeTodo
// Arguments: id of todo to remove
// Return value: none

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none

// Make sure to call loadTodos and setup the exports