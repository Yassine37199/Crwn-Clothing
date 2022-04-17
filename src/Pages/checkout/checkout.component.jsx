import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../Components/checkout-item/checkout-item.component'
import StripeButton from '../../Components/stripe-button/stripe-button.component'
import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors'
import { 
        CheckoutContainer, 
        CheckoutFooter, 
        CheckoutHeader, 
        CheckoutHeaderBlock, 
        CheckoutLink, 
        CheckoutPrice, 
        CheckoutPriceTitle, 
        CheckoutPriceValue, 
        CheckoutStripeWarning, 
        CheckoutTotal } from './checkout.styles'



const CheckoutPage = ({cartTotal , cartItems}) => (
    <CheckoutContainer>
        <h2>Shopping Cart.</h2>
        <CheckoutHeader>
            <CheckoutHeaderBlock>
                <span>Product</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Quantity</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Price</span>
            </CheckoutHeaderBlock>
        </CheckoutHeader>
        <div>
            {
                cartItems.map(item => (
                    <CheckoutItem key={item.id} item={item} />
                ))
            }
        </div>
        <CheckoutPrice>
            <CheckoutPriceTitle>Subtotal: <CheckoutPriceValue>${cartTotal}</CheckoutPriceValue></CheckoutPriceTitle>
            <CheckoutPriceTitle>Shipping: <CheckoutPriceValue>FREE</CheckoutPriceValue></CheckoutPriceTitle>
        </CheckoutPrice>
        <CheckoutFooter>
            <CheckoutLink to='/shop'> &#8592; Continue Shopping</CheckoutLink>
            <StripeButton price={cartTotal} />
            <CheckoutPriceTitle>Total: <CheckoutTotal>${cartTotal}</CheckoutTotal></CheckoutPriceTitle>
        </CheckoutFooter>
        <CheckoutStripeWarning>
            <p>*Please use the following test credit card for payments*</p>
            <p>4242 4242 4242 4242 ___ Exp: 01/23 ___ CW: 123</p>
        </CheckoutStripeWarning>
       
        
    </CheckoutContainer>
)


const mapStateToProps = createStructuredSelector({
    cartTotal : selectCartItemsTotal,
    cartItems : selectCartItems
})

export default connect(mapStateToProps)(CheckoutPage)