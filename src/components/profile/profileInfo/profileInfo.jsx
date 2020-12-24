import React from 'react';
import classes from './profileInfo.module.css';
import Preloader from '../../common/preloader/preloader';

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  // for (const property in props.profile.contacts) {
  //   if (property != null) { 
  //   return (
  //     <div className={classes.subtitle}> My contacts</div>
  //   <div>`${property}: ${props.profile.contacts[property]}`</div>)
  // }}   

  return (
    <div>
      <div>
        <img className={classes.backgroundPhoto} src="https://dfla.org/wp-content/uploads/2018/12/Dark-Red-background-banner.jpg"></img>
      </div>
      <div className={classes.profilePage}>
        <div className={classes.profilePhoto}>
          <img src={props.profile.photos.large} />
        </div>
        <div className={classes.descriptionBlock}>
          <div className={classes.name}>
            {props.profile.fullName}
          </div>
          <div>
            <div className={classes.subtitle}> {props.profile.aboutMe ? <div>About me</div> : null} </div>
            {props.profile.aboutMe}
          </div>
          <div>
            <div className={classes.subtitle}> {props.profile.lookingForAJob === true ? <div>Career status</div> : null} </div>
            {props.profile.lookingForAJob === true ? <div>{props.profile.lookingForAJobDescription}</div> : null}
          </div>
          <div>
            <div className={classes.subtitle}> My contacts</div> 
            
            <div>{props.profile.contacts.facebook}</div>
            <div>{props.profile.contacts.website}</div>
            <div>{props.profile.contacts.vk}</div>
            <div>{props.profile.contacts.twitter}</div>
            <div>{props.profile.contacts.instagram}</div>
            <div>{props.profile.contacts.youtube}</div>
            <div>{props.profile.contacts.github}</div>
            <div>{props.profile.contacts.mainLink}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;