import React from 'react'

import Basket from './Basket'
import GoodsList from './GoodsList'
import Search from './Search'
import Header from './Header'
import Footer from './Footer'

import {Container} from '@mui/material'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'


library.add(fab)

const App = () => {
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