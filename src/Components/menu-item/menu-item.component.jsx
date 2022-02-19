import React from 'react';

import './menu-item.styles.scss'


export const MenuItem = ({title , imageUrl , size}) => (
    <div className={`${size} menu-item`}>
        <div className='menu-item__image' style={{
        backgroundImage : `url(${imageUrl})`
        }} />
        <div className='menu-item__content'>
            <h1 className='menu-item__title'>{title}</h1>
            <span className='menu-item__subtitle'>SHOP NOW</span>
        </div>
    </div>
)