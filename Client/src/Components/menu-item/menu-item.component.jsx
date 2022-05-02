import React from 'react';

import {withRouter} from 'react-router-dom'
import { 
        BackgroundImageContainer, 
        MenuItemConatiner, 
        MenuItemContent, 
        MenuItemSubtitle,
        MenuItemTitle } from './menu-item.styles';


const MenuItem = ({title , imageUrl , size, history , match}) => (
    <MenuItemConatiner onClick={() => history.push(`${match.url}shop/${title}`)} size={size}>
        <BackgroundImageContainer imageUrl={imageUrl} />
        <MenuItemContent>
            <MenuItemTitle>{title}</MenuItemTitle>
            <MenuItemSubtitle>SHOP NOW</MenuItemSubtitle>
        </MenuItemContent>
    </MenuItemConatiner>
);

export default withRouter(MenuItem);