import React from 'react';
import { makeStyles, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';

// withStyles, makeStyles hooks for CSS styling -> JSS
const useStyle = makeStyles(theme => ({
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        left: '0px',
        width: '200px',
        height: '100%',
        backgroundColor: theme.palette.primary.dark,
        [theme.breakpoints.down('sm')]: {
            width: '0px'
        },
    },
}));

const pages = [
    {
        text: 'Home',
        icon: <InboxIcon />
    },
    {
        text: 'Schedule',
        icon: <MailIcon />
    },
]

const SideMenu = (): any => {
    const classes = useStyle();
    return (
        <div className={classes.sideMenu} >
            <Divider />
            <List>
                {pages.map((page) => (
                    <ListItem button key={page.text}>
                        <ListItemIcon>{page.icon}</ListItemIcon>
                        <ListItemText primary={page.text} />
                    </ListItem>
                ))}
                {/* {['Home', 'Schedule!'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
                ))} */}
            </List>
        </div>
    );
}

export default SideMenu;