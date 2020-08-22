import React from 'react';
import { makeStyles, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';


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
    '& .MuiSvgIcon-root': {
    }
}));

const SideMenu = (): any => {
    const classes = useStyle();
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
    return (
        <div className={classes.sideMenu} >
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
}

export default SideMenu;