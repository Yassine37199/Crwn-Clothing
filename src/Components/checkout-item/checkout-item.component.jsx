import React from 'react'
import { connect } from 'react-redux'
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../redux/cart/cart.actions'


import './checkout-item.styles.scss'



const CheckoutItem = ({item , removeItem , addItem , clearItem}) => {

    const {name , price , quantity , imageUrl} = item

    return(
        <div className='checkout-item'>

            <div className='checkout-item__image-container'>
                <img src={imageUrl} className='checkout-item__image' alt={name} />
                <span className='checkout-item__name'>{name}</span>
            </div>
            <div className='checkout-item__quantity'>
                <div onClick={() => addItem(item)} className="checkout-item__quantity-add">&#43;</div>
                <span>{quantity}</span>
                <div onClick={() => removeItem(item)} className="checkout-item__quantity-remove">&#8722;</div>
            </div>
            <div className='checkout-item__price'>
                <span>${price}</span>
                <span onClick={() => clearItem(item)} className='checkout-item__remove'>&#10006;</span>
            </div>
        </div>)
}

const mapDispatchToProps = dispatch => ({
    clearItem : item => dispatch(clearItemFromCart(item)),
    addItem : item => dispatch(addItemToCart(item)),
    removeItem : item => dispatch(removeItemFromCart(item))

})

export default connect(null ,mapDispatchToProps)(CheckoutItem)