import React from 'react';
import SignIn from '../../Components/sign-in/sign-in.component';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../Assets/crown.svg'

import './sign-in-out.styles.scss'
import { Route, Switch } from 'react-router-dom';


const SignInOut = () => (
    
    <div className='container'>
          <div className='sign-in-out'> 
            <Logo className="sign-in-out__logo" />
                <div className='sign-in-out__nav'>
                    <Link className="sign-in-out__link">JOIN</Link>
                    <Link to='/identity/login' className="sign-in-out__link">SIGN IN</Link>
                </div>
            <Switch>
                <Route path='/identity/login' component={SignIn} />
            </Switch>
        </div>
    </div>
)

export default SignInOut;