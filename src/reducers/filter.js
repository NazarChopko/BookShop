const initialState = {
    search:'',
    filterBy:'all'
}

const filterReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'SET_SEARCH':
            return {
                ...state,
                search:action.payload,
            };
        case 'SET_FILTER':
            return {
                ...state,
                filterBy:action.payload,
            };
    default: return state
    } 
}

export default filterReducer