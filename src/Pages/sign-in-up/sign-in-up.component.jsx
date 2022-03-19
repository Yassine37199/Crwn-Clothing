import React from 'react';
import SignIn from '../../Components/sign-in/sign-in.component';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../Assets/crown.svg'

import './sign-in-up.styles.scss'
import { Route, Switch } from 'react-router-dom';
import SignUp from '../../Components/sign-up/sign-up.component';
import { withRouter } from 'react-router-dom';


const SignInUp = (history , match) => {

    const pathname = history.location.pathname

    return( 
            
        <div className='container'>
            <Link to='/'>
                <Logo className="logo" />
            </Link>
            <div className='sign-in-out'> 
        
                <div className='sign-in-out__nav'>
                    <Link to='/identity/register' className={`${pathname === '/identity/register' ? 'selected' : ''} sign-in-out__link`}>JOIN</Link>
                    <Link to='/identity/login' className={`${pathname === '/identity/login' ? 'selected' : ''} sign-in-out__link`}>SIGN IN</Link>
                </div>
            <Switch> 
                <Route path='/identity/login' component={SignIn} />
                <Route path='/identity/register' component={SignUp} />
            </Switch>
        </div>
    </div>
    )

    
    
  
}

export default withRouter(SignInUp);