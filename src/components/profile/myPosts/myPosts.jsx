import React from 'react';
import Post from './post/post'
import classes from './myPosts.module.css';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utilities/validators/validators';
import { Textarea } from '../../common/formsControls/formsControls';


let maxLength30 = maxLengthCreator(30);

const MyPosts = (props) => {

  let postsElement = [...props.posts].reverse().map(
    p => <Post profilePhoto={props.profilePhoto} message={p.post} likes={p.likesCount} key={p.id} />
  );

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
    values.newPostText = '';
  }

  return (
    <div className={classes.postsBlock}>
      <h3>
        My posts
      </h3>
      <AddPostReduxForm onSubmit={onAddPost} />
      <div className={classes.posts}>
        {postsElement}
      </div>
    </div>
  );
}

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name='newPostText'
        component={Textarea}
        validate={[required, maxLength30]}
        className={classes.textarea}
        placeholder='Enter your post' />
      <div>
        <button className={classes.button}>Add a post</button>
      </div>
    </form>
  )
}

let AddPostReduxForm = reduxForm({
  form: 'addNewPostForm '
})(AddNewPostForm)




export default MyPosts;