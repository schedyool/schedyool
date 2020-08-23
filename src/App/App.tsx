// calebaren.github.io
import React from 'react';
import './App.css';
import 'fontsource-roboto';
import Header from '../Components/Header';
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Home from '../Pages/Home';
import Scheduler from '../Pages/Scheduler';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
  // const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {/* <div className={classes.appMain}> */}
          <Header title="Schedyool">
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/schedyooler">
                <Scheduler />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Header>
        {/* </div> */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
