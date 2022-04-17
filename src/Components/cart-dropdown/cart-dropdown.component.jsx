import React from 'react'
import { connect } from 'react-redux';
import { selectCartHidden, selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import emptyCart from '../../Assets/empty-cart.png'

import { withRouter } from 'react-router-dom';
import { toggleCart } from '../../redux/cart/cart.actions';

import { CartDropdownContainer, 
         CartItemsContainer, 
         EmptyCartContainer, 
         EmptyCartImage, 
         EmptyCartParagraph, 
         TotalContainer, 
         TotalPrice } from './cart-dropdown.styles';


const CartDropdown = ({cartItems , cartTotalPrice , history , toggleCart}) => (
    <CartDropdownContainer>
        <TotalContainer>Total: <TotalPrice>${cartTotalPrice}</TotalPrice></TotalContainer>
        <CartItemsContainer>
            {
                cartItems.length ?
                cartItems.map(({id , ...otherItemProps}) => (
                    <CartItem key={id} {...otherItemProps} />
                ))
                :
                <EmptyCartContainer>
                    <EmptyCartImage src={emptyCart} alt='empty cart' />
                    <EmptyCartParagraph>Your Cart is Empty</EmptyCartParagraph>
                    <EmptyCartImage>Looks like you haven't added anything to your cart yet</EmptyCartImage>
                </EmptyCartContainer>
            }
        </CartItemsContainer>
        <CustomButton 
            style={{
                'padding' : '10px'
            }}
            handleSubmit={() => {
                history.push('/checkout');
                toggleCart()}}>GO TO CHECKOUT</CustomButton>
    </CartDropdownContainer>
)


const mapStateToProps = (state) => ({
    cartItems : selectCartItems(state),
    cartTotalPrice : selectCartItemsTotal(state),
    hidden : selectCartHidden(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCart : () => dispatch(toggleCart())
})

export default withRouter(connect(mapStateToProps , mapDispatchToProps)(CartDropdown));
