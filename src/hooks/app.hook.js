import React, {useState, useEffect} from 'react'

const storageOrder = 'STORAGE_ORDER'

function getStorageOrder() {
    const data = JSON.parse(localStorage.getItem(storageOrder))
    if(data)
}

export const useApp = () => {
    const [order, setOrder] = useState(() => )
    const [search, setSearch] = useState('')
    const [products, setProducts] = useState([])
    const [isCartOpen, setCartOpen] = useState(false)

    useEffect(() => {
       
    }, [])
}