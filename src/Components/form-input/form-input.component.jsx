import React from 'react';
import { FormGroup, FormInputContainer, FormLabel } from './form-input.styles';




const FormInput = ({handleChange , label , ...props }) => (
    <FormGroup>
        <FormLabel>{label}</FormLabel>
        <FormInputContainer
            onChange={handleChange}
            {...props} />
    </FormGroup>
)

export default FormInput;