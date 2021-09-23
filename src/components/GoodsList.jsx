import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import GoodsItem from './GoodsItem'
import GoodsLoader from './GoodsLoader'

import { Box, Grid, Typography} from '@mui/material'


const GoodsList = (props) => {
    
    const {products, addToOrder, isLoading} = useContext(AppContext)

    if(!products.length && !isLoading) {
        return <Typography>Нет совпадений</Typography>
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={3} rowSpacing={4}>
                {isLoading ? 
                    new Array(6).fill(null).map(() => <GoodsLoader />)
                    :
                    products.map((item) => (
                            <GoodsItem key={item.id} setOrder={addToOrder} {...item} />
                    ))
                }
            </Grid>
        </Box>
    );
};

export default GoodsList