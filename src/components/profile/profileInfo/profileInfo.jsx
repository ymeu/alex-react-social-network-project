import React from 'react';
import classes from './profileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={classes.backgroundPhoto} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fspotlight.it-notes.ru%2Fwp-content%2Fuploads%2F2018%2F07%2F1cbf533ac406af123b10bad91d95f346.jpg&f=1&nofb=1"></img>
      </div>
      <div className={classes.descriptionBlock}>
        avatar & description
     </div>
    </div>
  );
}

export default ProfileInfo;