import React from 'react';
import classes from './post.module.css';

const Post = (props) => {
  return (
    <div className={`${classes.item} ${classes.post}`}>
      <img className = {classes.ava} src = 'https://tmssl.akamaized.net/images/portrait/originals/255450-1567785905.png'/> 
      {props.message}
      <div className = {classes.likesCounter}>{props.likes} Likes</div>
    </div>
  );
}

export default Post;