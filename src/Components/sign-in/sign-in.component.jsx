import React, { Component } from 'react';
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
            </div>
        )
    }
}

export default SignIn;