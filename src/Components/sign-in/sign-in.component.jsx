import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import {Redirect} from 'react-router-dom'

import {ReactComponent as GoogleLogo} from '../../Assets/Logos/google.svg'
import {ReactComponent as AppleLogo} from '../../Assets/Logos/apple.svg'
import {ReactComponent as TwitterLogo} from '../../Assets/Logos/twitter.svg'
import {ReactComponent as FacebookLogo} from '../../Assets/Logos/facebook.svg'

import './sign-in.styles.scss';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';



class SignIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email : '',
            password : ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const {email , password} = this.state;

        console.log(email , password)

        try {
            await auth.signInWithEmailAndPassword(email , password);
            <Redirect to="/" />
            this.setState({
                email : '',
                password : ''
            }) 
        }
        catch(error) {
            console.log(error)
        }
        
         
    }

    handleChange = e => {
        const {value , name} = e.target;
        
        this.setState({
            [name] : value
        })
    }

    render() {
        return(
            <div className='sign-in'>
                <FormInput 
                    type="email"
                    name="email"
                    value={this.state.email}
                    label="Email Adress :"
                    handleChange={this.handleChange}
                    required
                />
                <FormInput 
                    type="password"
                    name="password"
                    value={this.state.password}
                    label="Password :"
                    handleChange={this.handleChange}
                    required
                />
                <CustomButton type="submit" handleSubmit={this.handleSubmit}> SIGN IN</CustomButton>
                <Link to='/' className='sign-in__forgot-pswd'>forgot password ?</Link>
                <p className='sign-in__subtitle'> OR SIGN IN WITH ...</p>
                <div className='sign-in__options'>
                    <CustomButton 
                        brand={true}
                        handleSubmit = {signInWithGoogle}>
                        <GoogleLogo className='sign-in__brand-logo' />
                        Google
                    </CustomButton>
                    <CustomButton brand={true}>
                        <AppleLogo className='sign-in__brand-logo' />
                        Apple
                    </CustomButton>
                    <CustomButton brand={true}>
                        <FacebookLogo className='sign-in__brand-logo' />
                        Facebook
                    </CustomButton>
                    <CustomButton brand={true}>
                        <TwitterLogo className='sign-in__brand-logo' />
                        Twitter
                    </CustomButton>
                </div>
            </div>
        )
    }
}

export default SignIn;