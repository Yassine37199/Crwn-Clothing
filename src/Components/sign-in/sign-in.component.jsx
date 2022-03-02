import React, { Component } from 'react';
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
                <h2>I already have an account</h2>
                <span>Sign in with your email and password </span>

                <form onSubmit={e => this.handleSubmit(e)}>
                    <FormInput 
                        type="email" 
                        name='email' 
                        value={this.state.email} 
                        label = 'Email'
                        handleChange={this.handleChange} 
                        required />
                        
                    <FormInput 
                        type='password' 
                        name='password'
                        value={this.state.password} 
                        label = 'Password'
                        handleChange={this.handleChange}
                        required />

                    <input type='submit' value='Submit Form' />
                </form>
            </div>
        )
    }
}

export default SignIn;