import React from 'react';
import Post from './post/post'
import classes from './myPosts.module.css';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';

const MyPosts = (props) => {

  let postsElement = props.posts.map(
    p => <Post message={p.post} likes={p.likesCount} />
  );

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // props.updateNewPostText(text);
    // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <div className={classes.postsBlock}>
      <h3>
        My posts
      </h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            value={props.newPostText}
            onChange={onPostChange}
            className={classes.textarea}
            placeholder='Enter your post' />
        </div>
        <div>
          <button onClick={addPost}>Add a post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElement}
      </div>
    </div>
  );
}


export default MyPosts;