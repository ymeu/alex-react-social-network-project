import React from 'react';
import Post from './post/post'
import classes from './myPosts.module.css';

const MyPosts = () => {
  return (
      <div className={`${classes.item} ${classes.myPosts}`}>
          My posts
        <div className={`${classes.item} ${classes.post}`}>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <Post message = 'Hey! How are you?' likes = '59'/>
        <Post message = 'Hey, it is my first post!' likes = '21'/> 
      </div>
  );
}

export default MyPosts;