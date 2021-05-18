import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/formsControls/formsControls';
import { required } from '../../utilities/validators/validators';
import classes from './../common/formsControls/formsControls.module.css';
import loginClasses from './login.module.css';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={loginClasses.loginForm}>
            <div>
                <Field name={'email'} 
                className={loginClasses.loginName}
                validate={required}
                placeholder={'Email'} 
                component={Input} />
            </div>
            <div>
                <Field name={'password'}
                className={loginClasses.loginName}
                type={'password'} 
                validate={required}
                placeholder={'Password'} 
                component={Input} />
            </div>
            <div className={loginClasses.rememberMe}>
                <Field className={loginClasses.checkbox} name={'rememberMe'} component={Input} 
                type={'checkbox'} /> 
                <span>Remember me</span>
            </div>
            { props.captchaUrl && <img src={props.captchaUrl} /> }
            { props.captchaUrl &&
                <div>
                    <Field name={'captcha'}
                    type={'captcha'}
                    validate={required}
                    placeholder={'Enter the symbols'} 
                    component={Input} />
                </div>}
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
