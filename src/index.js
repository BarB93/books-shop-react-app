import React from 'react';
import ReactDOM from 'react-dom';

import {ThemeProvider, createTheme} from '@mui/material/styles'
import AlertContext from './context/AlertContext'
import {Provider as AppContextProvider} from './context/AppContext'
import App from './components/App'

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
            <AlertContext>
                <AppContextProvider>
                    <App /> 
                </AppContextProvider>
            </AlertContext>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
