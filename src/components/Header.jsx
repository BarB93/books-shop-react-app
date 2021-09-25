import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {openCart, setOrder} from '../redux/actions/cart'
import { fetchBooks } from '../redux/actions/books';

import {AppBar, Toolbar, IconButton, Typography, Badge, Container} from '@mui/material'
import {ShoppingCart} from '@mui/icons-material';
import { LOCAL_STORAGE_NAME_CART_ORDER } from '../types/localStorage'

function Header() {
  const orderLength = useSelector(({cart}) => cart.order.length) 
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(fetchBooks())
      const initialValue = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME_CART_ORDER))
      if(initialValue)
            dispatch(setOrder(initialValue))
  },[])

  return ( 
      <AppBar sx={{color: "#fff"}}>
        <Container>
          <Toolbar sx={{p:"0!important"}}>
            <Typography
              variant="h6"
              component="span"
              sx={{flexGrow: 1}}
            >
              Книжная Полка
            </Typography>
            <IconButton
              color="inherit"
              onClick={() => {dispatch(openCart())}}
            >
              <Badge badgeContent={orderLength} color="warning" showZero={true}>
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Toolbar>
        </Container>
        
      </AppBar>
   )
}

export default Header