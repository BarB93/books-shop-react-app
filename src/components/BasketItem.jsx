import { Close, RemoveCircleOutline, AddCircleOutline} from "@mui/icons-material"
import { ButtonGroup, IconButton, ListItem, Typography } from "@mui/material"
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const BasketItem = ({item}) => {
    const {setOrder, removeFromOrder} = useContext(AppContext)
    const {name, price, quantity, id} = item
    
    const handleClickIncrement = () => {
        setOrder(prev => prev.map(item => item.id === id ? {...item, quantity: ++item.quantity} : item))
    }

    const handleClickDecrement = () => {
        setOrder(prev => prev.map(item => item.id === id ? {...item, quantity: --item.quantity} : item))
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
                onClick={() => removeFromOrder(id)}
            >
                <Close />
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;