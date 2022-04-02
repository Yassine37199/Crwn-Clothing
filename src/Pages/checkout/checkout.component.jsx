import React from 'react'
import { Link } from 'react-router-dom'

import './checkout.styles.scss'



const CheckoutPage = () => (
    <div className='checkout'>
        <h2 className='checkout__title'>Shopping Cart.</h2>
        <div className='checkout__header'>
            <div className='checkout__header-block'>
                <span>Product</span>
            </div>
            <div className='checkout__header-block'>
                <span>Size</span>
            </div>
            <div className='checkout__header-block'>
                <span>Quantity</span>
            </div>
            <div className='checkout__header-block'>
                <span>Price</span>
            </div>
        </div>
        <div className='checkout__items'>

        </div>
        <div className='checkout__price'>
            <p className='checkout__price-title'>Subtotal: <span className='checkout__price-value'>$45</span></p>
            <p className='checkout__price-title'>Shipping: <span className='checkout__price-value'>FREE</span></p>
        </div>
        <div className='checkout__footer'>
            <Link className="checkout__link"> &#8592; Continue Shopping</Link>
            <p className='checkout__price-title'>Total: <span className='checkout__total'>$145</span></p>
        </div>
        
    </div>
)

export default CheckoutPage