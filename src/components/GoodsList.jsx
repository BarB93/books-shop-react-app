import React from 'react'
import { Box, Grid, Typography} from '@mui/material'

import GoodsItem from './GoodsItem';

const GoodsList = (props) => {
    const { goods, setOrder} = props;

    if(!goods.length) {
        return <Typography>Нет совпадений</Typography>
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={3} rowSpacing={4}>
                {goods.map((item) => (
                        <GoodsItem key={item.id} setOrder={setOrder} {...item} />
                ))}
            </Grid>
        </Box>
    );
};

export default GoodsList