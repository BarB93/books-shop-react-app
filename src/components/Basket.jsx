import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setOrder, closeCart as close } from '../redux/actions/cart'
import { useAlert } from 'react-alert'

import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, IconButton, Button } from '@mui/material'
import BasketItem from './BasketItem'

import { ShoppingCart,  KeyboardArrowRight } from '@mui/icons-material'

const Basket = () => {
    const dispatch = useDispatch()
    const {order, isOpenCart, totalPrice} = useSelector(({cart}) => cart)
    const alert = useAlert()

    const closeCart = () => {
        dispatch(close(false))
    }

    const handleClickCancel = () => {
        if(window.confirm('Выдействительно хотите отменить покупку?')) { 
            closeCart()
            dispatch(setOrder([]))
            alert.show('Заказ отменен!')
        }
    }

    const handleClickAccept = () => {
        console.log(`Ваш заказ! \n${JSON.stringify(order,null,' ')} \nОбщая стоимость:  ${totalPrice} рублей`)
        closeCart()
        dispatch(setOrder([]))
        alert.success('Заказ успешно оформлен!')
    }

    return (
        <Drawer
            anchor="right"
            open={isOpenCart}
            onClose={closeCart}
            PaperProps={{sx:{width:"100%", maxWidth: "400px"}}}
        >
            <List>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingCart />
                    </ListItemIcon>
                    <ListItemText primary="Корзина" />
                    <IconButton onClick={closeCart}>
                        <KeyboardArrowRight />
                    </IconButton> 
                </ListItem>
                <Divider />

                {!order.length ? (
                        <ListItem>Корзина пуста</ListItem>
                    ): (
                        <>
                            {order.map(item => <BasketItem key={item.name} item={item}/>)}
                            <ListItem>
                                <Typography 
                                    sx={{fontWeight: "700"}}
                                    
                                >
                                    Общая сумма: {order.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)} рублей.
                                </Typography>
                            </ListItem>
                            <ListItem>
                                    <Button onClick={handleClickCancel} 
                                            variant="outlined" 
                                            sx={{mr:"1rem"}} >Отменить</Button>
                                    <Button variant="outlined" 
                                            sx={{
                                                color: "#000",
                                                background: "#ffc107",
                                                borderColor: "transparent",
                                                "&:hover": {
                                                    borderColor: "#000"
                                                    
                                                }
                                            }}
                                            onClick={handleClickAccept}
                                    >Оформить заказ</Button>   
                            </ListItem>
                            
                        </>
                    )
                }
            </List>   
        </Drawer>
    )
}

export default Basket
