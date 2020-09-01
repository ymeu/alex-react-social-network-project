import React from 'react';
import MyPosts from './myPosts/myPosts';
import classes from './profile.module.css';

const Profile = () => {
  return (
    <div className={classes.mainContent}>
      <div>
        <img className = {classes.myPhoto} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fspotlight.it-notes.ru%2Fwp-content%2Fuploads%2F2018%2F07%2F1cbf533ac406af123b10bad91d95f346.jpg&f=1&nofb=1"></img>
      </div>
      <div className={classes.item}>
        avatar & description
     </div>
      <MyPosts />
    </div>
  );
}

export default Profile;