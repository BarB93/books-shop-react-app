import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {openCart} from '../redux/actions/cart'

import {AppBar, Toolbar, IconButton, Typography, Badge, Container} from '@mui/material'
import {ShoppingCart} from '@mui/icons-material';

function Header() {
  const orderLength = useSelector(({cart}) => cart.order.length) 
  const dispatch = useDispatch()

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