import {combineReducers} from 'redux'

import booksReducer from './books'
import cartReducer from './cart'
import filterReducer from './filter'

const rootReducer = combineReducers({
    booksReducer,
    cartReducer,
    filterReducer,
})

export default rootReducer