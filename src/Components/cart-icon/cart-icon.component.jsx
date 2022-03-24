import React from 'react'
import { connect } from 'react-redux'

import {ReactComponent as ShoppingIcon} from '../../Assets/Logos/shopping-bag.svg'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import './cart-icon.styles.scss'


const CartIcon = ({itemCount}) => (
    <div className='cart-icon'>
        <ShoppingIcon className='cart-icon__shopping-Icon' />
        <span className='cart-icon__item-count'> {itemCount} </span>
    </div>
)

const mapStateToProps = (state) => ({
    itemCount : selectCartItemsCount(state)
})
 
export default connect(mapStateToProps)(CartIcon);