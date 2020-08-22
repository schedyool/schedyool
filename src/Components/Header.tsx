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
    const [open, setOpen] = useState(true);
  
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
            icon: <MailIcon style={{ color: '#FFF' }} />,
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
            <IconButton>
                    <SchoolIcon />
                </IconButton>
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
                {pages.map((page) => (
                    <Link to={page.url} style={{ textDecoration: 'none', color: '#FFF' }}>
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
          {/* <div className={classes.drawerHeader} />
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
            gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
            donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
            Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
            imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
            arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
            tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
            consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
            vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
            hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
            tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
            nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
          </Typography> */}
        </main>
      </div>
    );
}

export default Header;