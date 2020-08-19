import React from 'react';
import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const Header = (): any => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container>
                    <Grid item>
                        <InputBase />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color="secondary">
                                <ChatBubbleOutlineIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge color="secondary">
                                <PowerSettingsNewIcon />
                            </Badge>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header;