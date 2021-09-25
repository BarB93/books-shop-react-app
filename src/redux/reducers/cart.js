import {SET_ORDER, SET_IS_OPEN_CART, ADD_ITEM_TO_CART, INCREMENT_ITEM, DECREMENT_ITEM, REMOVE_ITEM_FROM_CART} from '../../types/cart'

const initialState = {
    order: [],
    isOpenCart: false,
    totalPrice: 0,
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                order: state.order.filter(item => item.id !== action.payload)
            }
        case INCREMENT_ITEM: 
            return {
                ...state,
                order: state.order.map(item => item.id === action.payload ?
                    {...item, quantity: ++item.quantity} :
                    item
                )
            }
        case DECREMENT_ITEM: 
            return {
                ...state,
                order: state.order.map(item => item.id === action.payload ?
                    {...item, quantity: --item.quantity} :
                    item
                )
            }
        case SET_ORDER:
            return {
                ...state,
                order: action.payload,
            }
        
        case ADD_ITEM_TO_CART: {
            const {order} = state
            const {id, name, price} = action.payload
            let quantity = 1
            let newOrder = []
            let totalPrice = 0

            const indexInOrder = order.findIndex(
                (item) => item.id === id
            )
            
            if(indexInOrder > -1) {
                quantity = order[indexInOrder].quantity + 1

                newOrder =  order.map((item)=> item.id === id ?
                        {id, name, price, quantity} :
                        item
                    )   
            } else {
                newOrder = [...state.order, {id, name, price, quantity}]
            }

            totalPrice = newOrder.reduce((acc, item) => acc + item.price * item.quantity, 0)

            return {
                ...state,
                order: newOrder,
                totalPrice
            }
        }
        case SET_IS_OPEN_CART: 
            return {
                ...state,
                isOpenCart: action.payload
            }
        default: 
            return state
    }
}

export default cart