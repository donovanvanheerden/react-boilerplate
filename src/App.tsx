import React from 'react';

import Axios from 'axios';

import CssBaseline from '@material-ui/core/CssBaseline';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { RequestProvider } from 'react-request-hook';
import { Routes } from './routes';

import { SnackbarProvider } from 'notistack';
// HashRouter is used for Github Pages, otherwise use BrowserRouter
import { HashRouter as Router } from 'react-router-dom';

import './globals/translations';

const theme = createMuiTheme({
  palette: { primary: { main: '#6002ee' }, secondary: { main: '#d68f00' } },
});

const App = () => {
  const httpClient = Axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return (
    <RequestProvider value={httpClient}>
      <SnackbarProvider
        maxSnack={3}
        classes={{
          variantError: 'snackbar-error',
          variantInfo: 'snackbar-info',
          variantSuccess: 'snackbar-success',
          variantWarning: 'snackbar-warning',
        }}
      >
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Routes />
          </Router>
        </MuiThemeProvider>
      </SnackbarProvider>
    </RequestProvider>
  );
};

export default App;
