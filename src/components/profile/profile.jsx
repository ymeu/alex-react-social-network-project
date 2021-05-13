import React, { useState } from 'react';
import classes from './profile.module.css';
import Preloader from '../common/preloader/preloader';
import userPhoto from '../../assets/images/user.png';
import MyPostsContainer from './myPosts/myPostsContainer';
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

  const onCancel = (e) => {
    setEditMode(false);
  }

  return (
    <div className={classes.page} >
      <div className={classes.profilePage}>
        <div className={classes.profilePhoto}>
          <img src={props.profile.photos.large || userPhoto} />
          {props.isOwner && editMode && <input className={classes.fileUpload} type='file' onChange={onMainPhotoSelected} />}
        </div>
        <div className={classes.profileInfo}>
          {editMode
            ? <ProfileDataReduxForm initialValues={props.profile} 
              profile={props.profile} status={props.status} updateStatus={props.updateStatus}
              onSubmit={onSubmit} onCancel={onCancel}/>
            : <ProfileDescription
              profile={props.profile}
              isOwner={props.isOwner}
              status={props.status} updateStatus={props.updateStatus}
              activateEditMode={() => { setEditMode(true) }} />}
        </div>
        {props.isOwner && !editMode && <div><button className={classes.editButton} onClick={() => { setEditMode(true) }}>Edit page</button></div>}
      </div>
      <MyPostsContainer />
    </div>
  );
}

export default Profile;