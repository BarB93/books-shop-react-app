import {combineReducers} from 'redux'

import books from './books'
import cart from './cart'

const rootReducer = combineReducers({
    books, cart,
})

export default rootReducer