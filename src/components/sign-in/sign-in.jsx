import React from 'react';
import FormInput from '../form-input/formInput.jsx';
import CustomButton from '../custom-button/custom-button.jsx';

import './sign-in.scss';

class SignIn extends React.Component {
    constructor(){
        super();
        this.state = {
            email:'',
            password:'',
        }
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.setState({email:'',password:''})
    }

    handleChange = (e)=>{
        const {value, name}= e.target;
        this.setState({[name]:value})
    }
    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form action="" onSubmit={this.handleSubmit}>

                    <FormInput
                    type="email"
                    name="email"
                    label="Email"
                    value={this.state.email}
                    handleChange={this.handleChange}
                    required />

                    <FormInput
                    type="password"
                    name="password"
                    label="password"
                    handleChange={this.handleChange}
                    value={this.state.password}
                    required />

                <CustomButton type="submit">SIGN IN</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;