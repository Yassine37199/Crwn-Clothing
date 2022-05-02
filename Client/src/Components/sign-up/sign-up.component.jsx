import React , {Component, useState} from 'react'
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import {ReactComponent as GoogleLogo} from '../../Assets/Logos/google.svg'
import {ReactComponent as AppleLogo} from '../../Assets/Logos/apple.svg'
import {ReactComponent as TwitterLogo} from '../../Assets/Logos/twitter.svg'
import {ReactComponent as FacebookLogo} from '../../Assets/Logos/facebook.svg'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { SignInBrandLogo, SignInButtonOptions, SignInSubtitle } from '../sign-in/sign-in.styles';
import { SignUpContainer } from './sign-up.styles';




const SignUp = () => {
    

   const [userCredentials , setUserCredentials] = useState({
       email : "",
       displayName : "",
       password : "",
       confirmPassword : ""
   })


    const handleChange = e => {
        const {name , value} = e.target;
        setUserCredentials({
            [name] : value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const {displayName , email , password , confirmPassword} = userCredentials;
        if(password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email , password);

            await createUserProfileDocument(user , {displayName})
            setUserCredentials({
                email : "",
                displayName : "",
                password : "",
                confirmPassword : ""
            })
        }

        catch(error) {
            console.log(error)
        }
    }   

        return(

            <SignUpContainer>

                <SignInSubtitle>  SIGN UP WITH ...</SignInSubtitle>
                <SignInButtonOptions>
                    <CustomButton brand={true}>
                        <SignInBrandLogo as={GoogleLogo} />
                        Google
                    </CustomButton>
                    <CustomButton brand={true}>
                        <SignInBrandLogo as={AppleLogo}/>
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
                
                <SignInSubtitle> OR SIGN UP WITH EMAIL</SignInSubtitle>

                <FormInput 
                    type="text"
                    name="displayName"
                    value={userCredentials.displayName}
                    label="Display Name :"
                    handleChange={handleChange}
                    required
                />
                <FormInput 
                    type="email"
                    name="email"
                    value={userCredentials.email}
                    label="Email Adress :"
                    handleChange={handleChange}
                    required
                />
                <FormInput 
                    type="password"
                    name="password"
                    value={userCredentials.password}
                    label="Password :"
                    handleChange={handleChange}
                    required
                />
                <FormInput 
                    type="password"
                    name="confirmPassword"
                    value={userCredentials.confirmPassword}
                    label="Confirm Password :"
                    handleChange={handleChange}
                    required
                />
                <CustomButton type="submit" handleSubmit={handleSubmit}> JOIN US</CustomButton>
            </SignUpContainer>
        )
    }

export default SignUp;