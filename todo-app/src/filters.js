// Set up filters default object
const filters = {
    searchText: '',
    hideComplete: false
}
// getFilters
// Arguments: none
// Return value: filters object

export const getFilters = () =>{
    return filters
}

// setFilters
// Arguments: updates object with optional searchText or hideCompleted
// Return value: none

export const setFilters = (searchText, hideCompleted) => {
    if(searchText){
        filters.searchText = searchText
    } else if (hideCompleted){
        filters.hideComplete = hideCompleted
    }
}
// Make sure to set up the exports

export { getFilters, setFilters }