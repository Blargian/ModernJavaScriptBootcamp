import uuidv4 from 'uuid/v4'
import { renderTodos, generateTodoDOM, generateSummaryDOM } from './views'
import { createToDo, saveTodos } from './todos'

// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports
import { getFilters, setFilters} from './filters'
// Render initial todos
renderTodos()
// Set up search text handler
document.querySelector('#filter-todo').addEventListener('input',(e) =>{
    getFilters().searchText = e.target.value
    renderTodos()
})
// Set up checkbox handler
document.querySelector('#hide-completed').addEventListener('change',(e) =>{
        setFilters(undefined,e.target.checked)
        console.log(getFilters())
        renderTodos()
})
// Set up form submission handler
document.querySelector('#new-todo-form').addEventListener('submit',(e) =>{
    e.preventDefault()

    const text = e.target.elements.toDo.value.trim()

        createToDo(text)
        saveTodos()
        renderTodos()
        e.target.elements.toDo.value = ''
    })
// Bonus: Add a watcher for local storage