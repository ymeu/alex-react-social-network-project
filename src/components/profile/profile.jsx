import React from 'react';
import MyPosts from './myPosts/myPosts';
import classes from './profile.module.css';
import ProfileInfo from './profileInfo/profileInfo';

const Profile = (props) => {

  // let posts = [ 
  //   {id: '1', post: 'Hey! How are you?', likesCount: '59'},
  //   {id: '2', post: 'Hey, it is my first post!', likesCount: '11'},
  //   ];

  return (
    <div className={classes.profileBlock}>
      <ProfileInfo />
      <MyPosts posts = {props.posts} />
    </div>
  );
}

export default Profile;