import React from 'react';
import Post from './post/post'
import classes from './myPosts.module.css';

const MyPosts = (props) => {

  // let posts = [ 
  //   {id: '1', post: 'Hey! How are you?', likesCount: '59'},
  //   {id: '2', post: 'Hey, it is my first post!', likesCount: '11'},
  //   ];

  let postsElement = props.posts.map(
    p => <Post message={p.post} likes={p.likesCount} />
    );

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
        {postsElement}
        {/* <Post message={postData[0].post} likes={postData[0].likesCount} />
        <Post message={postData[1].post} likes={postData[1].likesCount} /> */}
      </div>
    </div>
  );
}


export default MyPosts;