import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';



class SignIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email : '',
            password : ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            email : '',
            password : ''
        })    
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
                    <CustomButton>Google</CustomButton>
                    <CustomButton>Apple</CustomButton>
                    <CustomButton>Facebook</CustomButton>
                    <CustomButton>Twitter</CustomButton>
                </div>
            </div>
        )
    }
}

export default SignIn;