import React, { useState } from 'react';
import classes from './profile.module.css';
import Preloader from '../common/preloader/preloader';
import userPhoto from '../../assets/images/user.png';
import MyPostsContainer from './myPosts/myPostsContainer';
import ProfileStatusWithHooks from './profileDescription/profileStatusWithHooks';
import ProfileDescription from './profileDescription/profileDescription';
import { ProfileDataReduxForm } from './profileDescription/profileDataForm';


const Profile = (props) => {

  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    const promise = props.saveProfile(formData);
    promise.then(
      () => {
        setEditMode(false);
      }
    )
  }

  return (
    <div>
      <div className={classes.profilePage}>
        <div className={classes.profilePhoto}>
          <img src={props.profile.photos.large || userPhoto} />
          {props.isOwner && editMode && <input type='file' onChange={onMainPhotoSelected} />}
        </div>
        <div className={classes.descriptionBlock}>
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
          {editMode
            ? <ProfileDataReduxForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />
            : <ProfileDescription
              profile={props.profile}
              isOwner={props.isOwner}
              activateEditMode={() => { setEditMode(true) }} />}
        </div>
      </div>
      <MyPostsContainer />
    </div>
  );
}

export default Profile;