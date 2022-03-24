import React from 'react'


import './cart-item.styles.scss'



const CartItem = ({name , price , quantity , imageUrl}) => (
    <div className='cart-item'>
        <img className='cart-item__image' src={imageUrl} alt={name}/>
        <div className='cart-item__details'>
            <p className='cart-item__name'>{name}</p>
            <span className='cart-item__price'>${price}</span>
            <span className='cart-item__quantity'> Quantity: {quantity}</span>
        </div>
    </div>
)

export default CartItem