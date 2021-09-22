import React from 'react'

export const AppContext = React.createContext({
    order: [],
    search: '',
    products: [],
    isCartOpen: false
})