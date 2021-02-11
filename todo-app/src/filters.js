// Set up filters default object
let filters = {
    searchText: '',
    hideComplete: false
}
// getFilters
// Arguments: none
// Return value: filters object

const getFilters = () =>{
    return filters
}

// setFilters
// Arguments: updates object with optional searchText or hideCompleted
// Return value: none

const setFilters = (searchText, hideCompleted) => {
    if(searchText !== undefined){
        filters.searchText = searchText
    }
    
    if(hideCompleted!==undefined){
        filters.hideComplete = hideCompleted
    }
    

}
// Make sure to set up the exports

export { getFilters, setFilters }