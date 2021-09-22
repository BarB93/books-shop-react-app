import {useState, useEffect} from 'react'
import { useAlert } from 'react-alert'
import { goods } from '../data/goods'

const storageOrderName = 'STORAGE_ORDER'

export const useApp = () => {
    const [order, setOrder] = useState(() => {
        const initialValue = JSON.parse(localStorage.getItem(storageOrderName))
        return initialValue || []
    })
    const [search, setSearch] = useState('')
    const [products, setProducts] = useState(goods)
    const [isCartOpen, setCartOpen] = useState(false)
    const alert = useAlert()

    useEffect(() => {
       localStorage.setItem(storageOrderName, JSON.stringify(order))
    }, [order])

    useEffect(() => {
        if (!search) {
            setProducts(goods)
            return;
        }

        setProducts(
            products.filter((good) =>
                good.name.toLowerCase().includes(search.toLowerCase())
            ))
    }, [search])

    const addToOrder = (goodsItem) => {
        let quantity = 1

        const indexInOrder = order.findIndex(
            (item) => item.id === goodsItem.id
        )

        if (indexInOrder > -1) {
            quantity = order[indexInOrder].quantity + 1

            setOrder(order.map((item) => {
                    if (item.id !== goodsItem.id) return item

                    return {
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        quantity,
                    }
                }),
            );
        } else {
            setOrder([
                    ...order,
                    {
                        id: goodsItem.id,
                        name: goodsItem.name,
                        price: goodsItem.price,
                        quantity,
                    },
                ],
            )
        }

        alert.success('Товар добавлен в корзину!')
    }

    const removeFromOrder = (goodsItem) => {
        setOrder(order.filter((item) => item.id !== goodsItem))
    }

    const openCart = () => {
        setCartOpen(true)
    }

    const closeCart = () => {
        setCartOpen(false)
    }

    return {
        products, setProducts,
        order, setOrder, addToOrder, removeFromOrder, 
        isCartOpen, openCart, closeCart,
        search, setSearch
    }
}