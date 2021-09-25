import {SET_BOOKS, SET_LOADED, SET_SEARCH} from '../../types/books'

const initialState = {
    items: [],
    isLoaded: false,
    search: []
}

const books = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS: 
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            }
        case SET_LOADED: 
            return {
                ...state,
                isLoaded: action.payload,
            }
        case SET_SEARCH:
            return {
                ...state,
                search: action.payload
            }
        default:
            return state
    }
}

export default books