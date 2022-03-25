import React from 'react'
import { connect } from 'react-redux';
import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import emptyCart from '../../Assets/empty-cart.png'

import './cart-dropdown.styles.scss';


const CartDropdown = ({cartItems , cartTotalPrice}) => (
    <div className='cart-dropdown'>
        <p className='total'>Total: <span className='total__price'>${cartTotalPrice}</span></p>
        <div className='cart-items'>
            {
                cartItems.length ?
                cartItems.map(({id , ...otherItemProps}) => (
                    <CartItem key={id} {...otherItemProps} />
                ))
                :
                <div className='empty-cart'>
                    <img src={emptyCart} className='empty-cart__image' alt='empty cart' />
                    <p className='empty-cart__message'>Your Cart is Empty</p>
                    <span className='empty-cart__paragraph'>Looks like you haven't added anything to your cart yet</span>
                </div>
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)


const mapStateToProps = (state) => ({
    cartItems : selectCartItems(state),
    cartTotalPrice : selectCartItemsTotal(state)
})

export default connect(mapStateToProps)(CartDropdown);
