import React from 'react'

import {ReactComponent as ShoppingIcon} from '../../Assets/Logos/shopping-bag.svg'
import './cart-icon.styles.scss'


const CartIcon = () => (
    <div className='cart-icon'>
        <ShoppingIcon className='cart-icon__shopping-Icon' />
        <span className='cart-icon__item-count'> 0 </span>
    </div>
)

export default CartIcon;