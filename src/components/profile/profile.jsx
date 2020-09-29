import React from 'react';
import MyPosts from './myPosts/myPosts';
import classes from './profile.module.css';
import ProfileInfo from './profileInfo/profileInfo';

const Profile = (props) => {

  return (
    <div className={classes.profileBlock}>
      <ProfileInfo />
      <MyPosts posts = {props.posts} addPost={props.addPost} />
    </div>
  );
}

export default Profile;