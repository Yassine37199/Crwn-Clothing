import React from 'react';
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils'

import {ReactComponent as Logo} from '../../Assets/crown.svg'

import './header.styles.scss'
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { toggleCart } from '../../redux/cart/cart.actions';



const Header = ({currentUser , hidden , toggleCart}) => (
    <div className='header'>
        <Link to='/' className='header__logo-box'>
            <Logo className='header__logo' />
        </Link>
        <div className='header__nav'>
            <Link to='/shop' className='header__nav-item'>SHOP</Link>
            <Link to='/' className='header__nav-item'>CONTACT</Link>


            {   
                currentUser ?
                (<div onClick={() => {
                    auth.signOut();
                    window.location.reload()}} className='header__nav-item'>SIGN OUT</div>)
                :
                (<Link to='/identity/login' className='header__nav-item'>SIGN IN</Link>)
            }
            <div onClick={toggleCart}>
                <CartIcon />
            </div>
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
);


const mapStateToProps = ({user : {currentUser} , cart : {hidden}}) => ({
    currentUser : currentUser,
    hidden : hidden
})

const mapDispatchToProps = dispatch => ({
    toggleCart : () => dispatch(toggleCart()) 
})

export default connect(mapStateToProps , mapDispatchToProps)(Header);