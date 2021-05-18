import React, { useState } from 'react';
import classes from '../profile.module.css';
import ProfileStatusWithHooks from './profileStatusWithHooks';

const ProfileDescription = ({ profile, isOwner, status, updateStatus }) => {
    
    let [contacts, hideContacts] = useState(false);

    const toggleContacts = () => {
        contacts ? hideContacts(false) : hideContacts(true);
    }
    
    return <div>
        <div className={classes.name}>
            {profile.fullName}
        </div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner} />
        <div className={classes.descriptionBlock}>
            <p>
                <b>Looking for a job:</b> <span>{profile.lookingForAJob ? 'yes' : 'no'}</span>
            </p>
            <p>
                <b>My skills:</b> <span>{profile.lookingForAJobDescription}</span>
            </p>
            <p>
                <b>About me:</b> <span>{profile.aboutMe}</span>
            </p>
            <details> 
                <summary className={classes.collapsible} onClick={toggleContacts} type="button">

                { contacts 
                ? <span className={classes.hideContacts}>Hide contacts</span> 
                : <span className={classes.showContacts}>Show contacts</span>
                }
                </summary>
                <div className={classes.content}>
                    <b>Contacts:</b> <span>{Object.keys(profile.contacts).map(key => {
                        return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                    })}</span>
                </div>
            </details>
        </div>
    </div>
}

const Contacts = ({ contactTitle, contactValue }) => {
    return <ul>
        <li><b>{contactTitle}:</b> {contactValue}</li>
    </ul>
}

export default ProfileDescription;

