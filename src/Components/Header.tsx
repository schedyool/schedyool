import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, makeStyles, Typography, Theme, createStyles, useTheme, CssBaseline, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import SchoolIcon from '@material-ui/icons/School';

const drawerWidth = 200;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: theme.palette.primary.dark,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }),
);

const Header = (props: any) => {
    const { title, children } = props;

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    const pages = [
        {
            text: 'Home',
            icon: <HomeIcon style={{ color: '#FFF' }} />,
            url: '/'
        },
        {
            text: 'Schedule',
            icon: <SchoolIcon style={{ color: '#FFF' }} />,
            url: '/scheduler'
        },
    ];
  
    return (
      <div className={classes.root}>
        <CssBaseline />
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
            <Link to="/">
              <IconButton>
                <SchoolIcon />
              </IconButton>
            </Link>
            <Typography variant="h6" noWrap>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon style={{color: '#FFF'}}/> : <ChevronRightIcon style={{color: '#FFF'}}/>}
            </IconButton>
          </div>
          <Divider />
            <List>
                {pages.map((page, i) => (
                    <Link to={page.url} style={{ textDecoration: 'none', color: '#FFF' }} key={i}>
                        <ListItem button key={page.text}>
                            <ListItemIcon>{page.icon}</ListItemIcon>
                            <ListItemText color="inherit" primary={page.text} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
            {children}
        </main>
      </div>
    );
}

export default Header;