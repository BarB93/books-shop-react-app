import React from 'react'

function noop() {}

export const AppContext = React.createContext({
    order: [],
    products: [],
    search: '',
    setSearch: noop,
    isCartOpen: false,
    openCart: noop,
    closeCart: noop,
})