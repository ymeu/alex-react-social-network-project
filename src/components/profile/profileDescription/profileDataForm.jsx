import React from 'react';
import prfileClasses from '../profile.module.css';
import { reduxForm, Field } from 'redux-form';
import formsClasses from './../../common/formsControls/formsControls.module.css';
import { required } from '../../../utilities/validators/validators';
import { Input, Textarea } from '../../common/formsControls/formsControls';


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>Save</button></div>
        <div className={prfileClasses.name}>
            <Field name={'fullName'}
                validate={required}
                placeholder={'Full Name'}
                component={Input} />
        </div>
        <div>
            <b>Looking for a job:</b> <Field name={'lookingForAJob'} component={Input} type='checkbox' />
        </div>
        <div>
            <b>My skills:</b> 
            <Field name={'lookingForAJobDescription'} component={Textarea} /> 
        </div>
        <div>
            <b>About me:</b> 
            <Field name={'aboutMe'} component={Textarea} />
        </div>
        <div>
        { error && <div className={formsClasses.loginFormError}>
                {error}
            </div>
            }
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <ul key={key} className={prfileClasses.contacts}>
                    <li>{key}:<Field name={'contacts.'+key} component={Input} /></li> 
                </ul>
                
            //  <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div>
    </form>
}

export const ProfileDataReduxForm = reduxForm({
    form: 'edit-profile'
})(ProfileDataForm)
