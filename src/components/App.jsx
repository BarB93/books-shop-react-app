import { useEffect} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {fetchBooks} from '../redux/actions/books'
import { setOrder } from '../redux/actions/cart'

import Basket from './Basket'
import GoodsList from './GoodsList'
import Search from './Search'
import Header from './Header'
import Footer from './Footer'

import {Container} from '@mui/material'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'

import { LOCAL_STORAGE_NAME_CART_ORDER } from '../types/localStorage'

library.add(fab)

const App = () => {
   const dispatch = useDispatch()
   const {order} = useSelector(({cart}) => cart)

    useEffect(() => {
        dispatch(fetchBooks())
        const initialValue = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME_CART_ORDER))
        if(initialValue)
             dispatch(setOrder(initialValue))
    },[])

    useEffect(() => {
        if(order)
            localStorage.setItem(LOCAL_STORAGE_NAME_CART_ORDER,JSON.stringify(order))
    }, [order])

    return (
        <div className='App'>
            <Header />
            <Container sx={{
                    mt: "5rem",
                    minHeight: "100vh"
                }}
            >
                <Search />
                <GoodsList />   
            </Container>
            <Footer />
            <Basket />
        </div>
    )
}

export default App