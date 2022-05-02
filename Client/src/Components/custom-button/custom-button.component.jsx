import React from 'react';
import { CustomButtonContainer } from './custom-button.styles';



const CustomButton = ({children , handleSubmit , ...otherButtonProps}) => (
    <CustomButtonContainer onClick={handleSubmit} className='custom-button' {...otherButtonProps}>
        {children}
    </CustomButtonContainer>
)


export default CustomButton;