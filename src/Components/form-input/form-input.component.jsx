import React from 'react';

import './form-input.styles.scss'




const FormInput = ({handleChange , label , ...props }) => (
    <div className='form__group'>
        <label className='form__label'>{label}</label>
        <input 
            className='form__input'
            onChange={handleChange}
            {...props} />
    </div>
)

export default FormInput;