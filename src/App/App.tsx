import React from 'react';
import './App.css';
import 'fontsource-roboto';
import SideMenu from '../Components/SideMenu';
import Header from '../Components/Header';
import PageHeader from '../Components/PageHeader';
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider, IconButton } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import DataComponent from '../Pages/DataComponent';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: '#3c44b126',
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526',
    },
    background: {
      default: "#f4f5fd",
    }
  },
  shape: {
    borderRadius: 8,
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: `translateZ(0)`,
      },
    },
  },
});


const useStyles = makeStyles({
  appMain: {
    paddingLeft: '200px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '0px'
    },
    width: '100%',
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header 
          title = "Schedyool"
        />
        {/* <PageHeader 
          title="Schedyool"
          subtitle="Schedule your students. Optimally."
          icon={<IconButton><SchoolIcon fontSize="large"/></IconButton>}
        /> */}
        <DataComponent />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
