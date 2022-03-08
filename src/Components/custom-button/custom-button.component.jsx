import React from 'react';

import './custom-button.styles.scss';



const CustomButton = ({children , handleSubmit , ...otherButtonProps}) => (
    <button 
        className='custom-button' 
        {...otherButtonProps}
        onClick={handleSubmit}
        >
        {children}
    </button>
)

export default CustomButton;