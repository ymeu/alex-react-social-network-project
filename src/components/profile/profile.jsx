import React from 'react';
import classes from './profile.module.css';
import ProfileInfo from './profileInfo/profileInfo';
import MyPostsContainer from './myPosts/myPostsContainer';

const Profile = () => {
  
  return (
    <div className={classes.profileBlock}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;