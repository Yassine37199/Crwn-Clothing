import React from 'react';

import './custom-button.styles.scss';



const CustomButton = ({children , handleSubmit , inverted , brand , ...otherButtonProps}) => (
    <button 
        className={`${inverted ? 'inverted' : ''} ${brand ? 'brand' : ''} custom-button`} 
        {...otherButtonProps}
        onClick={handleSubmit}
        >
        {children}
    </button>
)

export default CustomButton;