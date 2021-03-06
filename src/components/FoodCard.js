import React, {useState, useContext} from 'react';

import withFoodCardStyles from '../styles/FoodCard.style'
import handleAddToCart from '../utils/Cart/handleAddToCart'

import { Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography, Collapse, Divider} from '@material-ui/core'
import { ExpandMore, AddShoppingCart } from '@material-ui/icons'
import clsx from 'clsx';
import { UserContext } from '../App2';


const FoodCard = (props) => {
    const { classes, food } = props

    const [expanded, setExpanded] = useState(false)

    const handleExpandCard = () => {
        setExpanded(!expanded)
    }
    
    const { user, dispatch } = useContext(UserContext)

    // Current Issue: 
    // When item is added to cart, user goes to Shopping Cart
    // Shopping Cart breaks b/c new item's id is undefined??
    
    return (
        <Card className={classes.card}>
            <CardHeader title={food.name} className={classes.icon}/>
            <CardMedia
                className={classes.media}
                image={food.imgURL}
                title={food.name}
            />
            <CardContent>
                <h3 className={classes.icon}>${food.price}</h3>
            </CardContent>
            <Divider/>
            <CardActions className={classes.actions} disableActionSpacing>
                <IconButton onClick={() => handleAddToCart(user.user.id, food, dispatch)}>
                    <AddShoppingCart className={classes.icon} />
                </IconButton>
                <IconButton 
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandCard} 
                    aria-expanded={expanded}
                    aria-label='Show More'
                >
                    <ExpandMore/>
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography component="p" className={classes.icon}>
                        {food.description}<br/>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}
export default withFoodCardStyles(FoodCard)
