import React from 'react';
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils'

import {ReactComponent as Logo} from '../../Assets/crown.svg'

import './header.styles.scss'



const Header = ({currentUser}) => (
    <div className='header'>
        <Link to='/' className='header__logo-box'>
            <Logo className='header__logo' />
        </Link>
        <div className='header__nav'>
            <Link to='/shop' className='header__nav-item'>SHOP</Link>
            <Link to='/' className='header__nav-item'>CONTACT</Link>


            {   
                currentUser ? 
                <div onClick={() => auth.signOut()} className='header__nav-item'>SIGN OUT</div>
                :
                <Link to='/identity/login' className='header__nav-item'>SIGN IN</Link>
            }
            
        </div>
    </div>
)


export default Header;