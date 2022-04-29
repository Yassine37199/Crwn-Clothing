import React, { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import {Redirect} from 'react-router-dom'

import {ReactComponent as GoogleLogo} from '../../Assets/Logos/google.svg'
import {ReactComponent as AppleLogo} from '../../Assets/Logos/apple.svg'
import {ReactComponent as TwitterLogo} from '../../Assets/Logos/twitter.svg'
import {ReactComponent as FacebookLogo} from '../../Assets/Logos/facebook.svg'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { ForgotPasswordLink, SignInBrandLogo, SignInButtonOptions, SignInContainer, SignInSubtitle } from './sign-in.styles';



const SignIn = () => {


    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email , password);
            <Redirect to="/" />
            setEmail("")
            setPassword("") 
        }
        catch(error) {
            console.log(error)
        }
        
         
    }

    const handleChange = e => {
        const {value , name} = e.target;
        switch(name){
            case 'email' : setEmail(value)
            case 'password' : setPassword(value)
        }
    }
        return(
            <SignInContainer>
                <FormInput 
                    type="email"
                    name="email"
                    value={email}
                    label="Email Adress :"
                    handleChange={handleChange}
                    required
                />
                <FormInput 
                    type="password"
                    name="password"
                    value={password}
                    label="Password :"
                    handleChange={handleChange}
                    required
                />
                <CustomButton type="submit" handleSubmit={handleSubmit}> SIGN IN</CustomButton>
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

export default SignIn;