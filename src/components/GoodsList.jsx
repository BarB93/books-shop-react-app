import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { addToCart } from '../redux/actions/cart'

import GoodsItem from './GoodsItem'
import GoodsLoader from './GoodsLoader'

import { Box, Grid, Typography} from '@mui/material'


const GoodsList = (props) => {
    const {items, search, isLoaded} = useSelector(({books}) => books)
    const [products, setProducts] = useState(() => items)
   
    useEffect(() => {
        if(!search.length) {
            return setProducts(items)
        }

        setProducts(
            items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search, items])

    if(isLoaded && search.length && !products.length) {
        return <Typography>Нет совпадений</Typography>
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={3} rowSpacing={4}>
                {!isLoaded ? 
                    new Array(6).fill(null).map((_, index) => <GoodsLoader key={index}/>)
                    :
                    products.map((item) => (
                            <GoodsItem key={item.id} addToCart={addToCart} {...item} />
                    ))
                }
            </Grid>
        </Box>
    );
};

export default GoodsList