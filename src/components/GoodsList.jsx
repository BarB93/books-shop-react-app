import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import GoodsItem from './GoodsItem'

import { Box, Grid, Typography} from '@mui/material'


const GoodsList = (props) => {
    // const { goods, setOrder} = props;

    const {products, addToOrder} = useContext(AppContext)

    if(!products.length) {
        return <Typography>Нет совпадений</Typography>
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={3} rowSpacing={4}>
                {products.map((item) => (
                        <GoodsItem key={item.id} setOrder={addToOrder} {...item} />
                ))}
            </Grid>
        </Box>
    );
};

export default GoodsList