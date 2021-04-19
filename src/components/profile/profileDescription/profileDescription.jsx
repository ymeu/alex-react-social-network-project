import React from 'react';
import classes from '../profile.module.css';
// const ProfileDescription = (props) => {

//     let [editMode, setEditMode] = useState(false);

//     const onSubmit = (formData) => {
//         props.saveProfile(formData);
//         setEditMode(false);
//     }

//     return <div className={classes.descriptionBlock}>

//         <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
//         {editMode
//             ? <ProfileDataReduxForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />
//             : <ProfileData
//                 profile={props.profile}
//                 isOwner={props.isOwner}
//                 activateEditMode={() => { setEditMode(true) }} />}

//     </div>
// }

const ProfileDescription = ({ profile, isOwner, activateEditMode }) => {

    return <div>
        {isOwner && <div><button onClick={activateEditMode}>Edit</button></div>}
        <div className={classes.name}>
            {profile.fullName}
        </div>
        <div>
            <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        <div>
            <b>My skills:</b> {profile.lookingForAJobDescription}
        </div>
        <div>
            <b>About me:</b> {profile.aboutMe}
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div>
    </div>
}

const Contacts = ({ contactTitle, contactValue }) => {
    return <ul>
        <li><b>{contactTitle}:</b> {contactValue}</li>
    </ul>
}

export default ProfileDescription;


// const ProfileDescription = (props) => {
//     return <div className={classes.descriptionBlock} >
//         <div className={classes.name}>
//             {props.profile.fullName}
//         </div>
//         <div>
//             <div className={classes.subtitle}> {props.profile.aboutMe ? <div>About me</div> : null} </div>
//             {props.profile.aboutMe}
//         </div>
//         <div>
//             <div className={classes.subtitle}> {props.profile.lookingForAJob === true ? <div>Career status</div> : null} </div>
//             {props.profile.lookingForAJob === true ? <div>{props.profile.lookingForAJobDescription}</div> : null}
//         </div>
//         <div>
//             <div className={classes.subtitle}>My contacts</div>

//             <div>{props.profile.contacts.facebook}</div>
//             <div>{props.profile.contacts.website}</div>
//             <div>{props.profile.contacts.vk}</div>
//             <div>{props.profile.contacts.twitter}</div>
//             <div>{props.profile.contacts.instagram}</div>
//             <div>{props.profile.contacts.youtube}</div>
//             <div>{props.profile.contacts.github}</div>
//             <div>{props.profile.contacts.mainLink}</div>
//         </div>
//     </div>
// }