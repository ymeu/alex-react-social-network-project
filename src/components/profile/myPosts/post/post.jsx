import React from 'react';
import classes from './../myPosts.module.css';
import { NavLink } from 'react-router-dom';

const Post = (props) => {
  return (
    <div className={classes.post}>
      <div className={classes.textAndAva}>
        <NavLink to={'/profile/:userId?'}>
          <img className = {classes.ava} src = {props.profilePhoto}/> 
        </NavLink>
        <div className = {classes.likesCounter}>{props.likes} Likes</div>
      </div>
      <p>{props.message}</p> 
    </div>
  );
}

export default Post;