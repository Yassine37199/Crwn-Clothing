import React from 'react'
import { connect } from 'react-redux'
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../redux/cart/cart.actions'
import { 
        CheckoutItemAddButton, 
        CheckoutItemClearButton, 
        CheckoutItemContainer, 
        CheckoutItemImage, 
        CheckoutItemImageContainer, 
        CheckoutItemName, 
        CheckoutItemPrice, 
        CheckoutItemQuantity, 
        CheckoutItemRemoveButton } from './checkout-item.styles'



const CheckoutItem = ({item , removeItem , addItem , clearItem}) => {

    const {name , price , quantity , imageUrl} = item

    return(
        <CheckoutItemContainer>

            <CheckoutItemImageContainer>
                <CheckoutItemImage src={imageUrl} alt={name} />
                <CheckoutItemName>{name}</CheckoutItemName>
            </CheckoutItemImageContainer>
            <CheckoutItemQuantity>
            <CheckoutItemRemoveButton onClick={() => removeItem(item)}>&#8722;</CheckoutItemRemoveButton>
                <span>{quantity}</span>
                <CheckoutItemAddButton onClick={() => addItem(item)}>&#43;</CheckoutItemAddButton>
               
            </CheckoutItemQuantity>
            <CheckoutItemPrice>
                <span>${price}</span>
                <CheckoutItemClearButton onClick={() => clearItem(item)}>&#10006;</CheckoutItemClearButton>
            </CheckoutItemPrice>
        </CheckoutItemContainer>)
}

const mapDispatchToProps = dispatch => ({
    clearItem : item => dispatch(clearItemFromCart(item)),
    addItem : item => dispatch(addItemToCart(item)),
    removeItem : item => dispatch(removeItemFromCart(item))

})

export default connect(null ,mapDispatchToProps)(CheckoutItem)