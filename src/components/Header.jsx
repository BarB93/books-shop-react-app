import React from 'react'

import {AppBar, Toolbar, IconButton, Typography, Badge, Container} from '@mui/material'
import {ShoppingCart} from '@mui/icons-material';

function Header({handleCart, orderLen}) {
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
              onClick={handleCart}
            >
              <Badge badgeContent={orderLen} color="warning" showZero={true}>
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Toolbar>
        </Container>
        
      </AppBar>
   )
}

export default Header