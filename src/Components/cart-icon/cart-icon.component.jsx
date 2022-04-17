import React from 'react'
import { connect } from 'react-redux'


import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { CartIconContainer, ItemCountContainer, ShoppingIconContainer } from './cart-icon.styles'


const CartIcon = ({itemCount}) => (
    <CartIconContainer>
        <ShoppingIconContainer />
        <ItemCountContainer> {itemCount} </ItemCountContainer>
    </CartIconContainer>
)

const mapStateToProps = (state) => ({
    itemCount : selectCartItemsCount(state)
})
 
export default connect(mapStateToProps)(CartIcon);