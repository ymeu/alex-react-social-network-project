import React from 'react';
import classes from './post.module.css';
import { NavLink } from 'react-router-dom';

const Post = (props) => {
  return (
    <div className={`${classes.item} ${classes.post}`}>
      <NavLink to={'/profile/:userId?'}>
        <img className = {classes.ava} src = {props.profilePhoto}/> 
      </NavLink>
      <p>{props.message}</p>  
      <div className = {classes.likesCounter}>{props.likes} Likes</div>
    </div>
  );
}

export default Post;