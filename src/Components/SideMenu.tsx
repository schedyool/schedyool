import React from 'react';
import { makeStyles } from '@material-ui/core';

// withStyles, makeStyles hooks for CSS styling -> JSS
const useStyle = makeStyles(theme => ({
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '200px',
        height: '100%',
        backgroundColor: theme.palette.primary.dark,
    },
}));

const SideMenu = (): any => {
    const classes = useStyle();
    return (
        <div className={classes.sideMenu} >
        </div>
    );
}

export default SideMenu;