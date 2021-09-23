import React from 'react'
import { useApp } from '../hooks/app.hook'

function noop() {}

export const AppContext = React.createContext({
    order: [],
    products: [],
    setGoods: noop,
    search: '',
    setSearch: noop,
    isCartOpen: false,
    openCart: noop,
    closeCart: noop,
    decrimentQuantityOrder: noop,
    isLoading: false
})


export function Provider({children}) {
    const {
        setGoods,
        products,setProducts,
        order, setOrder, addToOrder, removeFromOrder, 
        isCartOpen, openCart, closeCart,
        search, setSearch,
        isLoading, setLoading
    } = useApp()

    return (
        <AppContext.Provider value={{
            setGoods,
            products, setProducts,
            order, setOrder, addToOrder,removeFromOrder, 
            isCartOpen, openCart, closeCart,
            search, setSearch,
            isLoading, setLoading
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default Provider
