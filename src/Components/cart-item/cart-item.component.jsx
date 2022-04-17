import React from 'react'
import { CartItemContainer, CartItemDetails, CartItemImage, CartItemName, CartItemPrice, CartItemQuantity } from './cart-item.styles'



const CartItem = ({name , price , quantity , imageUrl}) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt={name}/>
        <CartItemDetails>
            <CartItemName>{name}</CartItemName>
            <CartItemPrice>${price}</CartItemPrice>
            <CartItemQuantity> Quantity: {quantity}</CartItemQuantity>
        </CartItemDetails>
    </CartItemContainer>
)

export default CartItem