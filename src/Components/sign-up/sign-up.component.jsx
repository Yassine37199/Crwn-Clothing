import React , {Component} from 'react'
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import {ReactComponent as GoogleLogo} from '../../Assets/Logos/google.svg'
import {ReactComponent as AppleLogo} from '../../Assets/Logos/apple.svg'
import {ReactComponent as TwitterLogo} from '../../Assets/Logos/twitter.svg'
import {ReactComponent as FacebookLogo} from '../../Assets/Logos/facebook.svg'

import './sign-up.styles.scss'




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


    render() {
        return(

            <div className='sign-up'>

                <p className='sign-up__subtitle'>  SIGN UP WITH ...</p>
                <div className="sign-up__options">
                    <CustomButton brand={true}>
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
                
                <p className='sign-up__subtitle'> OR SIGN UP WITH EMAIL</p>

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
            </div>
        )
    }
}

export default SignUp;