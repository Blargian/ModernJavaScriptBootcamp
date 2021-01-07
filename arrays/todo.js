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

//This function deletes a toDo item
const deleteToDo = function(todo,valueToDelete){
    //get the index of the array that matches to 'valueToDelete'
    let indexToDelete = todo.findIndex(function(item,index){
        return item.text.toLowerCase() === valueToDelete.toLowerCase()
    })
    
    if(indexToDelete!=-1){
        todo.splice(indexToDelete,1)
    }
}

//returns to Dos which still have to be completed
const getThingsToDo = function(toDoList){
    return toDoList.filter(function(toDoItem,index){
        return toDoItem.completed === false
    })
}

//Sort by completed or incomplete
// const sortByCompleteIncomplete = function(toDoList){
//     toDoList.sort(function(a,b){
//         if(a.completed === false && b.completed === true){
//             return -1
//         } else if (b.completed === true && a.completed===false){
//             return 1
//         } else {
//             return 0
//         }
//     })
// }

//A better way to do that:

//Sort by completed or incomplete
const sortByCompleteIncomplete = function(toDoList){
    toDoList.sort(function(a,b){
        if(!a.completed && b.completed){
            return -1
        } else if (!b.completed && a.completed){
            return 1
        } else {
            return 0
        }
    })
}
