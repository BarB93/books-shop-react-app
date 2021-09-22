import { useState } from 'react'
import { useAlert } from 'react-alert'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'

import Basket from './Basket'
import GoodsList from './GoodsList'
import Search from './Search'
import Header from './Header'
import {Container} from '@mui/material'

import { goods } from '../data/goods'
import Footer from './Footer'

library.add(fab)

const App = () => {
    const [order, setOrder] = useState([])
    const [search, setSearch] = useState('')
    const [products, setProducts] = useState(goods)
    const [isCartOpen, setCartOpen] = useState(false)


    const alert = useAlert()

    const handleChange = (e) => {
        if (!e.target.value) {
            setProducts(goods)
            setSearch('')
            return;
        }

        setSearch(e.target.value)
        setProducts(
            products.filter((good) =>
                good.name.toLowerCase().includes(e.target.value.toLowerCase())
            ))
    };

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

    return (
        <div className='App'>
            <Header 
                handleCart={() => setCartOpen(true)}
                orderLen={order.length}
                
            />
            <Container
                sx={{
                    mt: "5rem",
                    minHeight: "100vh"
                }}
            >
                <Search
                    value={search}
                    onChange={handleChange}
                />
                <GoodsList
                    goods={products}
                    setOrder={addToOrder}
                />
                 
            </Container>
            <Basket 
                removeFromOrder={removeFromOrder}
                order={order}
                cartOpen={isCartOpen}
                closeCart={() => setCartOpen(false)}
                setOrder={setOrder}
            />
            <Footer />
            
        </div>
    );
}

export default App