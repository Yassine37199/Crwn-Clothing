import React from 'react'
import {Pulsar} from '@uiball/loaders'
import { PulseOverlay } from './with-spinner.styles'



const WithSpinner = WrappedComponent => {

    const Spinner = ({isLoading , ...otherProps}) => {
    return isLoading ? (
        <PulseOverlay>
            <Pulsar 
            size={70}
            speed={1.75} 
            color="black" 
            />
        </PulseOverlay>
    ) : <WrappedComponent {...otherProps} />
    }
    return Spinner
}

export default WithSpinner