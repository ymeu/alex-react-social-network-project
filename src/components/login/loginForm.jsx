import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/formsControls/formsControls';
import { required } from '../../utilities/validators/validators';
import classes from './../common/formsControls/formsControls.module.css';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'} 
                validate={required}
                placeholder={'Email'} 
                component={Input} />
            </div>
            <div>
                <Field name={'password'}
                type='password' 
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
            { props.error && <div className={classes.loginFormError}>
                {props.error}
            </div>
            }
        </form>
    )
}

export const LoginReduxForm = reduxForm({
    form: 'login'
  })(LoginForm)
