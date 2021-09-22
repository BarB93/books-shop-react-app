import React, { useContext } from 'react'

import {AppBar, Toolbar, IconButton, Typography, Badge, Container} from '@mui/material'
import {ShoppingCart} from '@mui/icons-material';
import { AppContext } from '../context/AppContext';

function Header() {
  const {order, openCart} = useContext(AppContext)

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
              onClick={openCart}
            >
              <Badge badgeContent={order.length} color="warning" showZero={true}>
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Toolbar>
        </Container>
        
      </AppBar>
   )
}

export default Header