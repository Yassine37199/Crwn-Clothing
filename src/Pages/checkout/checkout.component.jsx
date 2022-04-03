import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../Components/checkout-item/checkout-item.component'
import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors'

import './checkout.styles.scss'



const CheckoutPage = ({cartTotal , cartItems}) => (
    <div className='checkout'>
        <h2 className='checkout__title'>Shopping Cart.</h2>
        <div className='checkout__header'>
            <div className='checkout__header-block'>
                <span>Product</span>
            </div>
            <div className='checkout__header-block'>
                <span>Quantity</span>
            </div>
            <div className='checkout__header-block'>
                <span>Price</span>
            </div>
        </div>
        <div className='checkout__items'>
            {
                cartItems.map(item => (
                    <CheckoutItem key={item.id} item={item} />
                ))
            }
        </div>
        <div className='checkout__price'>
            <p className='checkout__price-title'>Subtotal: <span className='checkout__price-value'>${cartTotal}</span></p>
            <p className='checkout__price-title'>Shipping: <span className='checkout__price-value'>FREE</span></p>
        </div>
        <div className='checkout__footer'>
            <Link to='/shop' className="checkout__link"> &#8592; Continue Shopping</Link>
            <p className='checkout__price-title'>Total: <span className='checkout__total'>${cartTotal}</span></p>
        </div>
        
    </div>
)


const mapStateToProps = createStructuredSelector({
    cartTotal : selectCartItemsTotal,
    cartItems : selectCartItems
})

export default connect(mapStateToProps)(CheckoutPage)