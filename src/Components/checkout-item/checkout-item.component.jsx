import React from 'react'
import { connect } from 'react-redux'
import { removeItemFromCart } from '../../redux/cart/cart.actions'


import './checkout-item.styles.scss'



const CheckoutItem = ({item , removeItem}) => {

    const {name , price , quantity , imageUrl} = item

    return(
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
                <span onClick={() => removeItem(item)} className='checkout-item__remove'>&#10006;</span>
            </div>
        </div>)
}

const mapDispatchToProps = dispatch => ({
    removeItem : item => dispatch(removeItemFromCart(item))
})

export default connect(null ,mapDispatchToProps)(CheckoutItem)