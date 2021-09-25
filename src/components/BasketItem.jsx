import { useDispatch } from "react-redux"
import { decrementCartItem, incrementCartItem, removeItemFromCart} from "../redux/actions/cart";

import { Close, RemoveCircleOutline, AddCircleOutline} from "@mui/icons-material"
import { ButtonGroup, IconButton, ListItem, Typography } from "@mui/material"

const BasketItem = ({item}) => {
    const dispatch = useDispatch()
    const {name, price, quantity, id} = item
    
    const handleClickIncrement = () => {
        dispatch(incrementCartItem(id))
    }

    const handleClickDecrement = () => {
        dispatch(decrementCartItem(id))
    }

    const handleClickRemove = () => {
        dispatch(removeItemFromCart(id))
    }

    return (
        <ListItem >
            <Typography variant="body1">
                {name} {price}руб 
            </Typography>
            <Typography>{quantity}шт.</Typography>
            <ButtonGroup orientation="vertical">
                    <IconButton onClick={handleClickIncrement}>
                        <AddCircleOutline />
                    </IconButton>
                    <IconButton onClick={handleClickDecrement} disabled={quantity === 1}>
                        <RemoveCircleOutline />
                    </IconButton>
                </ButtonGroup>
            <IconButton
                onClick={handleClickRemove}
            >
                <Close />
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;