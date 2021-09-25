import React from 'react';
import ReactDOM from 'react-dom';
import {Provider as ReduxProvider} from 'react-redux'

import {ThemeProvider, createTheme} from '@mui/material/styles'
import AlertProvider from './context/AlertContext'

import App from './components/App'

import store from './redux/store'

import './index.scss';

const theme = createTheme({
    palette: {
        primary: {
            main: '#36BA5F'
        },
        text: {
           white: '#ffffff'
        }
    }
})

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <AlertProvider>
                  <ReduxProvider store={store}>
                    <App /> 
                  </ReduxProvider> 
            </AlertProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
