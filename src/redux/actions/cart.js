import {SET_ORDER, SET_IS_OPEN_CART, ADD_ITEM_TO_CART, DECREMENT_ITEM, INCREMENT_ITEM, REMOVE_ITEM_FROM_CART} from '../../types/cart'

export const setOrder = (order) => ({
    type: SET_ORDER,
    payload: order
})

export const addToCart = (item) => ({
    type: ADD_ITEM_TO_CART,
    payload: item,
})

export const setIsOpenCart = (isOpen) => ({
    type: SET_IS_OPEN_CART,
    payload: isOpen
})

export const decrementCartItem = (id) => ({
    type: DECREMENT_ITEM,
    payload: id
})

export const incrementCartItem = (id) => ({
    type: INCREMENT_ITEM,
    payload: id
})

export const removeItemFromCart = (id) => ({
    type: REMOVE_ITEM_FROM_CART,
    payload: id
})

export const openCart = () => (dispatch) => {
        dispatch(setIsOpenCart(true))    
}

export const closeCart = () => (dispatch) => {
        dispatch(setIsOpenCart(false))
}
