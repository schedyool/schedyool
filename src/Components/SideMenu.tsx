import React from 'react';
import { makeStyles } from '@material-ui/core';

// withStyles, makeStyles hooks for CSS styling -> JSS
const useStyle = makeStyles({
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: '#253053',
    },
});

const SideMenu = (): any => {
    const classes = useStyle();
    return (
        <div className={classes.sideMenu} >
        </div>
    );
}

export default SideMenu;