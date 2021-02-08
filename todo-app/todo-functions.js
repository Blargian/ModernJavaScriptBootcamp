//getSavedTodos
const getSavedTodos = function(){
    const todoJSON = localStorage.getItem('toDo')
    
    if(todoJSON!==null){
        return JSON.parse(todoJSON)
    } else {
        return []
    }
}
//saveTodos
const saveTodos = function(todolist){
    localStorage.setItem('toDo',JSON.stringify(todolist))
}
//renderTodos


const renderToDos = function(todolist, filters){
    const filteredToDos = todolist.filter(function(list){
        const searchTextMatch = list.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideComplete || !list.completed

        return searchTextMatch && hideCompletedMatch
    })

    document.querySelector('#to-dos').appendChild(generateSummaryDOM(filteredToDos))

    // filteredToDos.forEach(function (todo){
    //     document.querySelector('#to-dos').appendChild(generateTodoDOM(todo))
    // })

    Object.keys(filteredToDos).forEach(function(key){
        document.querySelector('#to-dos').appendChild(generateTodoDOM(filteredToDos[key]))
    })

    }

//This function removes a toDo item
const removeToDo = function (id){
    const index = toDo.findIndex(function(item){
        return item.id === id
    })

    toDo.splice(index,1)
    saveTodos(toDo)
    renderToDos(toDo,filters)
}

//Toggle to do button
const toggleToDo = function (id){
    const index = toDo.findIndex(function(item){
        return item.id === id
    })

    toDo[index].completed = !toDo[index].completed
}

//generateTodoDOM
const generateTodoDOM = function(toDoObject){

        //create the container element 
        const toDoItem = document.createElement('div') 
        //create the checkbox
        const checkBox = document.createElement('input')
        checkBox.setAttribute('type','checkbox')
        checkBox.checked = toDoObject.completed
        checkBox.addEventListener('click',function(){
            toggleToDo(toDoObject.id)
            renderToDos(toDo,filters)
            saveTodos(toDo)
        })
        //create the text
        const text = document.createElement('span')
        text.textContent = `${toDoObject.text}`
        //create the cancel button
        const cancel = document.createElement('button')
        cancel.textContent='X'
        cancel.addEventListener('click',function(){
            removeToDo(toDoObject.id)
        })

        //Append the elements to the div
        toDoItem.appendChild(checkBox)
        toDoItem.appendChild(text)
        toDoItem.appendChild(cancel)

        return toDoItem
}
//generateSummaryDOM
//Print summary of how many todos are left in a paragraph


const generateSummaryDOM = function(todo){
    let left = 0

    todo.forEach(function(item,index){
        if(!item.completed){
            left = left+1
        }
    })

    document.querySelector('#to-dos').innerHTML = ''

    const toDoLeft = document.createElement('h2')
    toDoLeft.textContent = `There are ${left} items left to do`
    return toDoLeft
}