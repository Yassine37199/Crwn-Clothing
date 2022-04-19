import React , {Component} from 'react'
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import {ReactComponent as GoogleLogo} from '../../Assets/Logos/google.svg'
import {ReactComponent as AppleLogo} from '../../Assets/Logos/apple.svg'
import {ReactComponent as TwitterLogo} from '../../Assets/Logos/twitter.svg'
import {ReactComponent as FacebookLogo} from '../../Assets/Logos/facebook.svg'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { SignInBrandLogo, SignInButtonOptions, SignInSubtitle } from '../sign-in/sign-in.styles';
import { SignUpContainer } from './sign-up.styles';




class SignUp extends Component {
    
    constructor(props){
        super(props);

        this.state = {

            displayName : '',
            email : '',
            password : '',
            confirmPassword : ''
        }
    }


    handleChange = e => {
        const {name , value} = e.target;

        this.setState({
            [name] : value
        })
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {displayName , email , password , confirmPassword} = this.state;
        if(password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email , password);

            await createUserProfileDocument(user , {displayName})
            this.setState({
                displayName : '',
                email : '',
                password : '',
                confirmPassword : ''
            })
        }

        catch(error) {
            console.log(error)
        }
    }   


    render() {
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
                    value={this.state.displayName}
                    label="Display Name :"
                    handleChange={this.handleChange}
                    required
                />
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
                <FormInput 
                    type="password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    label="Confirm Password :"
                    handleChange={this.handleChange}
                    required
                />
                <CustomButton type="submit" handleSubmit={this.handleSubmit}> JOIN US</CustomButton>
            </SignUpContainer>
        )
    }
}

export default SignUp;