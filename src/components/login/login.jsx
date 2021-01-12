import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { getLoginData } from '../../redux/authReducer';
import { Input } from '../common/formsControls/formsControls';
import { required } from '../../utilities/validators/validators';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'} 
                validate={required}
                placeholder={'Login'} 
                component={Input} />
            </div>
            <div>
                <Field name={'password'} 
                validate={required}
                placeholder={'Password'} 
                component={Input} />
            </div>
            <div>
                <Field name={'rememberMe'} component={Input} 
                type={'checkbox'} />Remember me
            </div>
            <div>
                <button type='submit'>Login</button>
            </div>
        </form>
    )
}

let LoginReduxForm = reduxForm({
    form: 'login'
  })(LoginForm)

const Login = (props) => {
    let onSubmit = (formData) => {
        console.log(formData)
        // props.getLoginData(formData);
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

connect (mapStateToProps, { getLoginData })(Login)

export default Login;