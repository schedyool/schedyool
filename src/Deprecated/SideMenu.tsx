import React, { useState } from 'react';
import { makeStyles, Divider, List, ListItem, ListItemIcon, ListItemText, useTheme, Hidden, Drawer } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';

const drawerWidth = 240;

// withStyles, makeStyles hooks for CSS styling -> JSS
const useStyle = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    // sideMenu: {
    //     flexDirection: 'column',
    //     position: 'fixed',
    //     left: '0px',
    //     width: '200px',
    //     height: '100%',
    //     backgroundColor: theme.palette.primary.dark,
    //     [theme.breakpoints.down('sm')]: {
    //         width: '0px'
    //     },
    // },
    drawer: {
        [theme.breakpoints.up('xs')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
}));

const SideMenu = (): any => {
    const classes = useStyle();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);

    const pages = [
        {
            text: 'Home',
            icon: <InboxIcon />,
            url: '/'
        },
        {
            text: 'Schedule',
            icon: <MailIcon />,
            url: '/scheduler'
        },
    ];

    // toggles drawer state
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const sideMenu = (
        <div className={classes.toolbar} >
            <Divider />
            <List>
                {pages.map((page) => (
                    <Link to={page.url}>
                        <ListItem button key={page.text}>
                            <ListItemIcon>{page.icon}</ListItemIcon>
                            <ListItemText color='#000' primary={page.text} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <Header 
                onClick={handleDrawerToggle} 
                title="Schedyool" 
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
            />
            <nav className={classes.drawer}>
                <Hidden smUp implementation="css">
                    <Drawer 
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                    >
                        {sideMenu}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {sideMenu}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    )
}

export default SideMenu;