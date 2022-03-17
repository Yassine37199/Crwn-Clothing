import React from 'react';

import './custom-button.styles.scss';



const CustomButton = ({children , handleSubmit , brand , ...otherButtonProps}) => (
    <button 
        className={`${brand ? 'brand' : ''} custom-button`} 
        {...otherButtonProps}
        onClick={handleSubmit}
        >
        {children}
    </button>
)

export default CustomButton;