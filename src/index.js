import React from 'react';
import ReactDOM from 'react-dom';

import {ThemeProvider, createTheme} from '@mui/material/styles'
import {positions, Provider as ProviderAlert} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import App from './components/App';

import './index.scss';


const optionsAlert = {
    timeout: 5000,
    position: positions.BOTTOM_LEFT
}

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
            <ProviderAlert template={AlertTemplate} {...optionsAlert}>
                <App />
            </ProviderAlert>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
