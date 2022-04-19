import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import {Redirect} from 'react-router-dom'

import {ReactComponent as GoogleLogo} from '../../Assets/Logos/google.svg'
import {ReactComponent as AppleLogo} from '../../Assets/Logos/apple.svg'
import {ReactComponent as TwitterLogo} from '../../Assets/Logos/twitter.svg'
import {ReactComponent as FacebookLogo} from '../../Assets/Logos/facebook.svg'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { ForgotPasswordLink, SignInBrandLogo, SignInButtonOptions, SignInContainer, SignInSubtitle } from './sign-in.styles';



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
            <SignInContainer>
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
                <ForgotPasswordLink to='/'>forgot password ?</ForgotPasswordLink>
                <SignInSubtitle> OR SIGN IN WITH ...</SignInSubtitle>
                <SignInButtonOptions>
                    <CustomButton 
                        brand={true}
                        handleSubmit = {signInWithGoogle}>
                        <SignInBrandLogo as={GoogleLogo} />
                        Google
                    </CustomButton>
                    <CustomButton brand={true}>
                        <SignInBrandLogo as={AppleLogo} />
                        Apple
                    </CustomButton>
                    <CustomButton brand={true}>
                        <SignInBrandLogo as={FacebookLogo} />
                        Facebook
                    </CustomButton>
                    <CustomButton brand={true}>
                        <SignInBrandLogo as={TwitterLogo} />
                        Twitter
                    </CustomButton>
                </SignInButtonOptions>
            </SignInContainer>
        )
    }
}

export default SignIn;