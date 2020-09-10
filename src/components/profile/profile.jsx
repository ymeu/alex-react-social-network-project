import React from 'react';
import MyPosts from './myPosts/myPosts';
import classes from './profile.module.css';
import ProfileInfo from './profileInfo/profileInfo';

const Profile = () => {
  return (
    <div className={classes.profileBlock}>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
}

export default Profile;