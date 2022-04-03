import React from 'react'


import './checkout-item.styles.scss'



const CheckoutItem = ({item : {name , price , quantity , imageUrl}}) => (

    <div className='checkout-item'>

        <div className='checkout-item__image-container'>
            <img src={imageUrl} className='checkout-item__image' alt={name} />
            <span className='checkout-item__name'>{name}</span>
        </div>
        <div className='checkout-item__quantity'>
            <span>&#43;</span>
            <span>{quantity}</span>
            <span>&#8722;</span>
        </div>
        <div className='checkout-item__price'>
            <span>${price}</span>
            <span className='checkout-item__remove'>&#10006;</span>
        </div>
    </div>
)


export default CheckoutItem