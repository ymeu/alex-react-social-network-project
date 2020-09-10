import React from 'react';
import Post from './post/post'
import classes from './myPosts.module.css';

const MyPosts = () => {
  return (
    <div className={classes.postsBlock}>
      <h3>
        My posts
      </h3>
      <div>
        <div>
          <textarea className={classes.textarea} ></textarea>
        </div>
        <div>
          <button>Add a post</button>
        </div>
      </div>
      <div className={classes.posts}>
        <Post message='Hey! How are you?' likes='59' />
        <Post message='Hey, it is my first post!' likes='21' />
      </div>
    </div>
  );
}


export default MyPosts;