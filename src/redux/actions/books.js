import axios from "axios"
import {SET_BOOKS, SET_LOADED, SET_SEARCH} from '../../types/books'

export const fetchBooks = () => (dispatch) => {
    dispatch({
        type: SET_LOADED,
        payload: false,
    })

    axios
        .get('/books')
        .then(({data}) => {
            dispatch(setBooks(data))
        })
}

export const setBooks = (items) => ({
    type: SET_BOOKS,
    payload: items
})

export const setSearch = (search) => ({
    type: SET_SEARCH,
    payload: search
})