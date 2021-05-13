import React from 'react';
import classes from '../profile.module.css';
import ProfileStatusWithHooks from './profileStatusWithHooks';

const ProfileDescription = ({ profile, isOwner, status, updateStatus }) => {

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
            <Collapsible profile={profile} />
            {/* <p>
                <b>Contacts:</b> <span>{Object.keys(profile.contacts).map(key => {
                    return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                })}</span>
            </p> */}
        </div>
    </div>
}

const Collapsible = ({ profile }) => {


    var coll = document.getElementsByClassName("collapsible");
    var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

    return <p>
        <button type="button" className={classes.collapsible}>Show contacts</button>
        <div className={classes.content}>
            <b>Contacts:</b> <span>{Object.keys(profile.contacts).map(key => {
                return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}</span>
        </div>
    </p>
    
}


const Contacts = ({contactTitle, contactValue}) => {
    return <ul>
            <li><b>{contactTitle}:</b> {contactValue}</li>
        </ul>
}

export default ProfileDescription;