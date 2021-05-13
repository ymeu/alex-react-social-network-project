import React from 'react';
import profileClasses from '../profile.module.css';
import { reduxForm, Field } from 'redux-form';
import formsClasses from './../../common/formsControls/formsControls.module.css';
import { required } from '../../../utilities/validators/validators';
import { Input, Textarea } from '../../common/formsControls/formsControls';

const ProfileDataForm = ({ handleSubmit, profile, error, onCancel }) => {
    return <form className={profileClasses.editProfileForm} onSubmit={handleSubmit}>
        <div className={profileClasses.editProfile}>
            <div className={profileClasses.editName}>
                <b>Full name</b>
                <Field name={'fullName'}
                    validate={required}
                    placeholder={'Full Name'}
                    component={Input} />
            </div>
            <div>
                <b>Looking for a job</b> <Field name={'lookingForAJob'} component={Input} type='checkbox' />
            </div>
            <div>
                <b>My skills</b>
                <Field name={'lookingForAJobDescription'} component={Textarea} />
            </div>
            <div>
                <b>About me</b>
                <Field name={'aboutMe'} component={Textarea} />
            </div>
            <div className={profileClasses.editContacts}>
                {error && <div className={formsClasses.loginFormError}>
                    {error}
                </div>
                }
                <b>Contacts</b> <ul>{Object.keys(profile.contacts).map(key => {
                      return  <li>{key}:<Field name={'contacts.' + key} component={Input} /></li>
                })}
                </ul>
            </div>
        </div>
        <div className={profileClasses.saveButton}><button>Save</button></div>
        <div className={profileClasses.cancelButton}><button onClick={onCancel}>Cancel</button></div>
    </form>
}

export const ProfileDataReduxForm = reduxForm({
    form: 'edit-profile'
})(ProfileDataForm)
