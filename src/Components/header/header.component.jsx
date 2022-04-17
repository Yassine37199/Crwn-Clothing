import React from 'react';
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils'

import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { toggleCart } from '../../redux/cart/cart.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { HeaderContainer, LogoContainer, NavContainer, NavItemLink } from './header.styles';



const Header = ({currentUser , hidden , toggleCart}) => (
    <HeaderContainer>
        <Link to='/'>
            <LogoContainer/>
        </Link>
        <NavContainer>
            <NavItemLink to='/shop'>SHOP</NavItemLink>
            <NavItemLink to='/'>CONTACT</NavItemLink>
            {   
                currentUser ?
                (<NavItemLink as='div' onClick={() => {
                    auth.signOut();
                    window.location.reload()}}>SIGN OUT</NavItemLink>)
                :
                (<NavItemLink to='/identity/login'>SIGN IN</NavItemLink>)
            }
            <div onClick={toggleCart}>
                <CartIcon />
            </div>
        </NavContainer>
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
);


const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    toggleCart : () => dispatch(toggleCart()) 
})

export default connect(mapStateToProps , mapDispatchToProps)(Header);