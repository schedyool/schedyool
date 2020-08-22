import React, { useState } from 'react';
import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge, makeStyles, Typography, Theme, createStyles, useTheme, CssBaseline, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';
import MyAppBar from './MyAppBar';
import SchoolIcon from '@material-ui/icons/School';

const drawerWidth = 200;

// const useStyles = makeStyles(theme => ({
//     root: {
//         backgroundColor: '#FFF',
//     },
//     searchInput: {
//         opacity: '0.6',
//         padding: `0px ${theme.spacing(1)}px`,
//         fontSize: '0.8rem',
//         '&:hover': {
//             backgroundColor: '#f2f2f2',
//         },
//         '& .MuiSvgIcon-root': {
//             marginRight: theme.spacing(1),
//         },
//     },
//     appBar: {
//         transition: theme.transitions.create(['margin', 'width'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//     },
//     appBarShift: {
//         width: `calc(100%-${drawerWidth}px)`,
//         marginLeft: drawerWidth,
//         transition: theme.transitions.create(['margin', 'width'], {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//         [theme.breakpoints.up('sm')]: {
//             display: 'none',
//         },
//     },
//     hide: {
//         display: 'none',
//     }
// }));

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

// const Header = (props: any): any => {
//     const classes = useStyles();
//     const { title, onClick, ...other } = props;

//     return (
//         <AppBar 
//             position="fixed" 
//             className={clsx(classes.appBar, {
//                 // eslint-disable-next-line no-restricted-globals
//                 [classes.appBarShift]: open,
//             })}
//         >
//             <Toolbar>
//                 <Grid container alignItems="center">
//                     <Grid item>
//                         <IconButton
//                             color="inherit"
//                             aria-label="open drawer"
//                             edge="start"
//                             onClick={onClick}
//                             className={classes.menuButton}
//                             {...other}
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                     </Grid>
//                     <Grid item>
//                         <Typography 
//                             variant="h4"
//                             component="div"
//                             color="textPrimary"
//                         >
//                             {title}
//                         </Typography>
//                         {/* <InputBase 
//                             placeholder="Search Website" 
//                             className={classes.searchInput}
//                             startAdornment={<SearchIcon fontSize="small" />}
//                         /> */}
//                     </Grid>
//                     <Grid item xs></Grid>
//                     <Grid item>
//                         <IconButton>
//                             <Badge badgeContent={4} color="secondary" >
//                                 <NotificationsNoneIcon />
//                             </Badge>
//                         </IconButton>
//                         {/* <IconButton>
//                             <Badge badgeContent={3} color="secondary">
//                                 <ChatBubbleOutlineIcon />
//                             </Badge>
//                         </IconButton> */}
//                         <IconButton>
//                             <PowerSettingsNewIcon />
//                         </IconButton>
//                     </Grid>
//                 </Grid>
//             </Toolbar>
//         </AppBar>
//     )
// }

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
        {/* <MyAppBar title={title} handleDrawerOpen={handleDrawerOpen} classes={classes} /> */}
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