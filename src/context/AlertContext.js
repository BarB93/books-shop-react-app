import React from 'react'
import {positions, Provider as ProviderAlert} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const optionsAlert = {
    timeout: 5000,
    position: positions.BOTTOM_LEFT
}

function AlertContext({children}) {
    return (
        <ProviderAlert template={AlertTemplate} {...optionsAlert}>
            {children}
        </ProviderAlert>
    )
}

export default AlertContext
