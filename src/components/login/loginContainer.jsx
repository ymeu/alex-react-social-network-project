import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';
import { LoginReduxForm } from './loginForm';

const Login = (props) => {
    
    let onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    } 

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    )
}

let mapStateToProps = (state) => ({
isAuth: state.auth.isAuth,
captchaUrl: state.auth.captchaUrl
})

export default connect (mapStateToProps, { login })(Login);