/* eslint-disable no-restricted-globals */
// calebaren.github.io
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import clsx from "clsx";
import MenuIcon from '@material-ui/icons/Menu';
import SchoolIcon from '@material-ui/icons/School';

const MyAppBar = (props: any) => {
    const { classes, handleDrawerOpen, title } = props;

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
                <IconButton>
                    <SchoolIcon/>
                </IconButton>
                <Typography variant="h6" noWrap>
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default MyAppBar;