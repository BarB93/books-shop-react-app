import {Container} from '@mui/material'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'

import { AppContext } from '../context/AppContext'
import {useApp} from '../hooks/app.hook'

import Basket from './Basket'
import GoodsList from './GoodsList'
import Search from './Search'
import Header from './Header'
import Footer from './Footer'

library.add(fab)

const App = () => {
    const {
        products,setProducts,
        order, setOrder, addToOrder, removeFromOrder, 
        isCartOpen,openCart,closeCart,
        search, setSearch
    } = useApp()

    return (

        <AppContext.Provider value={{
            products, setProducts,
            order, setOrder, addToOrder,removeFromOrder, 
            isCartOpen, openCart, closeCart,
            search, setSearch
        }}>
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
        </AppContext.Provider>
        
    );
}

export default App