import React from 'react'
import { useDispatch} from 'react-redux';
import { useAlert } from 'react-alert';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';

const GoodsItem = ({ id, name, price, poster, raiting, addToCart}) => {
    const dispatch = useDispatch()
    const alert = useAlert()
    
    const handleClickAddToCart = () => {
        dispatch(addToCart({
            id,
            name,
            price,
            })
        )
        alert.success("Товар добавлен в корзину!")
    }

    return (
        <Grid item xs={12} sm={6} md={4}>
           <Card 
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: 'column',
                pb: "5px"
            }}
           >
                <CardMedia 
                    component="img"
                    alt={name}
                    height="140"
                    image={poster}
                    sx={{objectFit: "contain"}}
                />
                <CardContent sx={{
                        flexGrow: "1",
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    <Typography 
                        variant="body1" 
                        component="h2"
                        sx={{
                            mb: "1rem",
                            flexGrow: 1,
                            fontWeight: 700,
                        }}
                    >
                        {name}
                    </Typography>
                    <Typography>
                        <Rating name="half-rating-read" defaultValue={raiting} precision={0.5} />
                    </Typography>
                    <Typography>
                        Цена: {price} руб.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button 
                        variant="outlined"
                        onClick={handleClickAddToCart}
                    >Купить</Button>
                </CardActions>
           </Card>
           
        </Grid>
    )
}

export default GoodsItem