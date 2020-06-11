import React, { useContext } from 'react';
import { Link } from "react-router-dom";

//Importing from components
import withSideDrawerStyles from '../styles/SideDrawer.style'
import handleLogout from '../utils/Login/handleLogout'

//Importing from MUI
import { Drawer, Divider, List, ListItem, ListItemText, ListItemIcon, CssBaseline, CardMedia } from '@material-ui/core';
import { Home, Computer, Email, MenuBook, ExitToApp, PersonAdd, ShoppingCart, PermIdentity } from '@material-ui/icons';
import { UserContext } from '../App2';

const SideDrawer = ({classes}) => {
    const centeredText = { textAlign: 'center'}

    const currentUser = useContext(UserContext)

    return (
       <div className={classes.root}>
            <CssBaseline />
            <Drawer 
                className={classes.drawer}
                variant='permanent'
                classes={{
                    paper: classes.drawerPaper
                }}
                anchor='left'
            >
                <h1 className={classes.companyTitle} style={centeredText}>¡Come Tacos!</h1>
                <Divider className={classes.divider}/>
                <List>
                    <ListItem button divider component={Link} to='/' className={classes.listItem}>
                        <ListItemIcon className={classes.drawerIcon}>
                            <Home />
                        </ListItemIcon>
                        <ListItemText className={classes.navOptions} primary="Home"/>
                    </ListItem>
                    <ListItem button divider component={Link} to='/menu' className={classes.listItem}>
                        <ListItemIcon className={classes.drawerIcon}>
                            <Computer />
                        </ListItemIcon>
                        <ListItemText className={classes.navOptions} primary="Order Online"/>
                    </ListItem>
                    <ListItem button divider component={Link} to='/contact' className={classes.listItem}>
                        <ListItemIcon className={classes.drawerIcon}>
                            <Email />
                        </ListItemIcon>
                        <ListItemText className={classes.navOptions} primary="Contact Us"/>
                    </ListItem>
                    <ListItem button divider component={Link} to='/about' className={classes.listItem}>
                        <ListItemIcon className={classes.drawerIcon}>
                            <MenuBook />
                        </ListItemIcon>
                        <ListItemText className={classes.navOptions} primary="Our Story"/>
                    </ListItem>
                    
                    { currentUser ? (
                        <ListItem button divider component={Link} to='/login' className={classes.listItem}>
                            <ListItemIcon className={classes.drawerIcon} onClick={() => console.log('its me')}>
                                <ExitToApp />
                            </ListItemIcon>
                            <ListItemText className={classes.navOptions} primary="Log Out" />
                        </ListItem>
                    ) : (
                        <ListItem button divider component={Link} to='/login' className={classes.listItem}>
                            <ListItemIcon className={classes.drawerIcon}>
                                <PermIdentity />
                            </ListItemIcon>
                            <ListItemText className={classes.navOptions} primary="Login"/>
                        </ListItem>
                    )}
                    
                    { currentUser ? (
                        <ListItem button divider component={Link} to='/shoppingcart' className={classes.listItem}>
                            <ListItemIcon className={classes.drawerIcon}>
                                <ShoppingCart />
                            </ListItemIcon>
                            <ListItemText className={classes.navOptions} primary="Shopping Cart"/>
                        </ListItem>
                    ) : (
                        <ListItem button divider component={Link} to='/signup' className={classes.listItem}>
                            <ListItemIcon className={classes.drawerIcon}>
                                <PersonAdd />
                            </ListItemIcon>
                            <ListItemText className={classes.navOptions} primary="Sign Up"/>
                        </ListItem>
                    )}
                </List>
            </Drawer>
        </div>

    )
}

export default withSideDrawerStyles(SideDrawer)