import React from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as Logo} from '../../Assets/crown.svg'

import './header.styles.scss'



const Header = () => (
    <div className='header'>
        <Link to='/' className='header__logo-box'>
            <Logo className='header__logo' />
        </Link>
        <div className='header__nav'>
            <Link to='/shop' className='header__nav-item'>SHOP</Link>
            <Link className='header__nav-item'>CONTACT</Link>
            <Link className='header__nav-item'>SIGN IN</Link>
        </div>
    </div>
)


export default Header;