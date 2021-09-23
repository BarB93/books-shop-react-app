import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { ShoppingCart,  KeyboardArrowRight } from '@mui/icons-material'
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, IconButton, Button } from '@mui/material'
import { useAlert } from 'react-alert'
import BasketItem from './BasketItem'

const Basket = (props) => {
    const {
        order, setOrder,
        isCartOpen, closeCart
    } = useContext(AppContext)

    const alert = useAlert()

    return (
        <Drawer
            anchor="right"
            open={isCartOpen}
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
                                    <Button onClick={() => {
                                                if(window.confirm('Выдействительно хотите отменить покупку?')) { 
                                                    closeCart()
                                                    setOrder([])
                                                    alert.show("Заказ отменен!")
                                                }}} 
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
                                            onClick={() => {
                                                console.log("Ваш заказ!",JSON.stringify(order,null,' '))
                                                closeCart()
                                                setOrder([])
                                                alert.success("Заказ успешно оформлен!")
                                            }}
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
